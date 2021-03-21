import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { TreeModel } from './models/tree.model';
import { NodeService } from './services/node.service';
import { NodeInterface } from './interfaces/node.interface';
import { NodeClickedService } from './services/node-clicked.service';
import { TranslateService } from '@ngx-translate/core';
import { FileManagerStoreService, SET_LOADING_STATE, SET_SELECTED_NODE } from './services/file-manager-store.service';
import { NtkSmartModalService } from 'ngx-ntk-smart-module';
import { ComponentOptionModel } from './models/componentOptionModel';

@Component({
  selector: 'cms-file-manager',
  templateUrl: './cms-filemanager.component.html',
  styleUrls: ['./cms-filemanager.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CmsFileManagerComponent implements OnInit {
  @Input() iconTemplate: TemplateRef<any>;
  @Input() folderContentTemplate: TemplateRef<any>;
  @Input() folderContentBackTemplate: TemplateRef<any>;
  @Input() folderContentReloadTemplate: TemplateRef<any>;
  @Input() folderContentNewTemplate: TemplateRef<any>;
  @Input() loadingOverlayTemplate: TemplateRef<any>;
  @Input() sideViewTemplate: TemplateRef<any>;
  @Input() set selectFileType(model: Array<string>) {
    if (model && model.length > 0) {
      this.configSelectFileType = model;
    }
  }
  configSelectFileType: Array<string> = [];
  @Input() tree: TreeModel;
  @Input() isPopup = false;
  @Input() openFilemanagerButtonLabelKey = 'filemanager.open_file_manager';
  @Input() openFilemanagerButtonView = true;
  @Output() itemClicked = new EventEmitter();
  @Output() itemSelected = new EventEmitter();

  private privateOpenForm = false;
  @Output() openFormChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() set openForm(model: boolean) {
    this.privateOpenForm = model;
    this.openFormChange.emit(model);
  }
  get openForm(): boolean {
    return this.privateOpenForm;
  }

  private optionsData: ComponentOptionModel = new ComponentOptionModel();
  @Output() optionsChange: EventEmitter<ComponentOptionModel> = new EventEmitter<ComponentOptionModel>();
  @Input() set options(model: ComponentOptionModel) {
    if (!model) {
      model = new ComponentOptionModel();
    }
    this.optionsData = model;
    this.optionsData.childMethods = {
      ActionOpen: (status: boolean) => this.onActionOpen(status),
    };
    this.optionsChange.emit(model);
  }
  get options(): ComponentOptionModel {
    return this.optionsData;
  }

  openFilemanagerButtonLabel: string;
  private privateLanguage = 'en';
  @Input() set language(value: string) {
    this.privateLanguage = value;
    this.translate.use(this.language);
  }

  get language(): string {
    return this.privateLanguage;
  }

  selectedNode: NodeInterface;
  sideMenuClosed = true;

  // fmOpen = false;
  loading: boolean;
  newDialog = false;

  constructor(
    private store: FileManagerStoreService,
    public nodeService: NodeService,
    private nodeClickedService: NodeClickedService,
    public ntkSmartModalService: NtkSmartModalService,
    public translate: TranslateService,
  ) {
    translate.setDefaultLang('fa');
    translate.use('fa');
    // console.log('CmsFileManagerComponent', this.nodeService.newGuid());
  }
  onActionOpen(status: boolean): void {
    this.openForm = status;
  }
  ngOnInit(): void {
    this.nodeService.serviceTree = this.tree;
    this.nodeClickedService.serviceTree = this.tree;

    this.nodeService.startManagerAt(this.tree.currentPath);
    // this.nodeService.getNodes(this.tree.currentPath).then(() => {
    //   this.store.setState({type: SET_SELECTED_NODE, payload: });
    // });

    this.translate.get(this.openFilemanagerButtonLabelKey).subscribe((translation: any) => {
      this.openFilemanagerButtonLabel = translation;
    });

    this.store
      .getState((state) => state.fileManagerState.isLoading)
      .subscribe((isLoading: boolean) => {
        this.loading = isLoading;
      });

    this.store
      .getState((state) => state.fileManagerState.selectedNode)
      .subscribe((selectedNode: NodeInterface) => {
        if (!selectedNode) {
          return;
        }

        // debugger;
        // fixed highlighting error when closing node but not changing path
        if (selectedNode.isExpanded && selectedNode.id !== this.nodeService.currentParentId && !selectedNode.stayOpen) {
          return;
        }

        this.handleFileManagerClickEvent({ type: 'select', node: selectedNode });
      });
  }

  onItemClicked(event: any): void {
    this.itemClicked.emit(event);
  }

  searchClicked(data: any): void {
    const node = this.nodeService.findFolderById(data.id);
    this.ntkSmartModalService.getModal('searchModal').close();
    this.store.setState({ type: SET_SELECTED_NODE, payload: node });
  }

  handleFileManagerClickEvent(event: any): any {
    switch (event.type) {
      case 'closeSideView':
        return this.nodeClickHandler(event.node, true);

      case 'select':
        this.onItemClicked(event);
        this.highlightSelected(event.node);
        return this.nodeClickHandler(event.node);

      case 'download':
        this.nodeClickedService.startDownload(event.node);
        return this.onItemClicked(event);

      case 'renameConfirm':
        return this.ntkSmartModalService.getModal('renameModal').open();
      case 'rename':
        this.ntkSmartModalService.getModal('renameModal').close();
        if (this.selectedNode.isFolder) {
          this.nodeClickedService.actionRenameFolder(this.selectedNode.id, event.value);
        } else {
          this.nodeClickedService.actionRenameFile(this.selectedNode.id, event.value);
        }

        return this.onItemClicked({
          type: event.type,
          node: this.selectedNode,
          newName: event.value,
        });

      case 'removeAsk':
        return this.ntkSmartModalService.getModal('confirmDeleteModal').open();
      case 'remove':
        this.ntkSmartModalService.getModal('confirmDeleteModal').close();
        if (this.selectedNode.isFolder) {
          this.nodeClickedService.actionDeleteFolder(this.selectedNode);
        } else {
          this.nodeClickedService.actionDeleteFile(this.selectedNode);
        }

        return this.onItemClicked({
          type: event.type,
          node: this.selectedNode,
        });

      case 'createFolder':
        const parentId = this.nodeService.findFolderById(this.nodeService.currentParentId).id;

        this.nodeClickedService.actionCreateFolder(parentId, event.payload);
        return this.onItemClicked({
          type: event.type,
          parentId,
          newDirName: event.payload,
        });
    }
  }

  nodeClickHandler(node: NodeInterface, closing?: boolean): any {
    // debugger;
    if (node.id === 0) {
      return;
    }

    if (closing) {
      const parentNode = this.nodeService.findFolderById(this.nodeService.currentParentId);
      this.store.setState({ type: SET_SELECTED_NODE, payload: parentNode });
      this.sideMenuClosed = true;
    } else {
      if (this.selectedNode === node && this.sideMenuClosed) {
        this.sideMenuClosed = false;
      } else if (this.selectedNode === node && !this.sideMenuClosed) {
        this.sideMenuClosed = true;
      } else if (this.selectedNode !== node && this.sideMenuClosed) {
        this.sideMenuClosed = false;
      } else if (this.selectedNode !== node && !this.sideMenuClosed) {
        this.sideMenuClosed = false;
      }
    }

    this.selectedNode = node;

    // todo investigate this workaround - warning: [File Manager] failed to find requested node for path: [path]
    if (!document.getElementById('side-view')) {
      return;
    }

    if (this.sideMenuClosed) {
      document.getElementById('side-view').classList.remove('selected');
    } else {
      document.getElementById('side-view').classList.add('selected');
    }
  }

  // todo stay DRY!
  highlightSelected(node: NodeInterface): void {
    // debugger;

    let pathToNode = node.id;

    if (!pathToNode || pathToNode === 0) {
      pathToNode = 0;
    }

    const treeElement = this.getElementById(pathToNode, 'tree_');
    const fcElement = this.getElementById(pathToNode, 'fc_');

    if (!treeElement && !fcElement && pathToNode === 0) {
      return;
    }
    if (!treeElement && !fcElement) {
      console.warn('[File Manager] failed to find requested node for path:', pathToNode);
      return;
    }

    this.removeClass('highlighted');
    this.removeClass('light');

    if (fcElement) {
      this.highilghtChildElement(fcElement);
    }
    if (treeElement) {
      this.highilghtChildElement(treeElement, true);
    }

    // parent node highlight
    let pathToParent = node.id;
    if (pathToParent === this.nodeService.currentParentId) {
      return;
    }

    if (pathToParent === 0) {
      pathToParent = 0;
    }

    const parentElement = this.getElementById(pathToParent, 'tree_');
    if (!parentElement) {
      // console.warn('[File Manager] failed to find requested parent node for path:', pathToParent);
      return;
    }

    this.highilghtChildElement(parentElement);
  }

  private highilghtChildElement(el: HTMLElement, light: boolean = false): void {
    el.children[0].children[0].classList // appnode div wrapper // ng template first item
      .add('highlighted');

    if (light) {
      el.children[0].children[0].classList.add('light');
    }
  }

  private getElementById(id: number, prefix: string = ''): HTMLElement | null {
    const fullId = prefix + id;
    return document.getElementById(fullId);
  }

  private removeClass(className: string): void {
    Array.from(document.getElementsByClassName(className)).map((el: any) => el.classList.remove(className));
  }

  fmShowHide(): void {
    this.openForm = !this.openForm;
  }

  backdropClicked(): void {
    // todo get rid of this ugly workaround
    // todo fire userCanceledLoading event
    this.store.setState({ type: SET_LOADING_STATE, payload: false });
  }

  handleUploadDialog(event: any): void {
    this.newDialog = event;
  }

  confirmSelection(): void {
    this.openForm = false;
    this.itemSelected.emit(this.selectedNode);
  }
  allowConfirmSelection(selectedNode: NodeInterface): boolean {
    if (
      !selectedNode ||
      (selectedNode.isFolder && !this.tree.config.options.showSelectFolder) ||
      (!selectedNode.isFolder && !this.tree.config.options.showSelectFile)
    ) {
      return false;
    }
    if (!selectedNode.isFolder && !this.AllowFileView(selectedNode)) {
      return false;
    }

    return true;
  }

  cancelSelection(): void {
    this.openForm = false;
  }

  AllowFileView(model: NodeInterface): boolean {
    if (
      !model ||
      model.isFolder ||
      !model.type ||
      model.type.length === 0 ||
      !this.configSelectFileType ||
      this.configSelectFileType.length === 0 ||
      this.configSelectFileType.find((t) => t.toLowerCase() === model.type.toLowerCase())
    ) {
      return true;
    }
    return false;
  }
}
