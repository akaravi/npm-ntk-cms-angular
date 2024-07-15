import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NtkSmartModalService } from 'ngx-ntk-smart-module';
import { NodeInterface } from './interfaces/node.interface';
import { TreeModel } from './models/tree.model';
import { FileManagerStoreService, SET_LOADING_STATE, SET_SELECTED_NODE } from './services/file-manager-store.service';
import { NodeClickedService } from './services/node-clicked.service';
import { NodeService } from './services/node.service';
import { TranslateUiService } from './services/translateUi.service';

@Component({
  selector: 'cms-file-manager',
  templateUrl: './cms-filemanager.component.html',
  styleUrls: ['./cms-filemanager.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NodeService, NodeClickedService, FileManagerStoreService]
})
export class CmsFileManagerComponent implements OnInit, AfterViewInit {

  private _language = 'en';
  @Input() set language(value: string) {
    if (value && value.length > 0) {
      this._language = value;
      this.translateUiService.init(value);
      this.translate.use(this.language);
    }
  }
  get language(): string {
    return this._language;
  }
  @Input() iconTemplate: TemplateRef<any>;
  @Input() folderContentTemplate: TemplateRef<any>;
  @Input() folderContentBackTemplate: TemplateRef<any>;
  @Input() folderContentNewFileTemplate: TemplateRef<any>;
  @Input() folderContentNewFolderTemplate: TemplateRef<any>;
  @Input() folderContentReloadTemplate: TemplateRef<any>;


  @Input() openFilemanagerButtonView = true;
  @Input() openDirectUploadSave = true;
  @Input() openDirectUploadView = false;
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
  @Input() openSelectFileDescription = '';
  @Output() itemClicked = new EventEmitter();
  @Output() itemSelected = new EventEmitter();
  openPopupForm = false;
  @Output() openFormChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() set openForm(model: boolean) {
    if (model !== this.openPopupForm && this.mainModal && this.mainModal.nativeElement) {
      if (model) {
        this.mainModal.nativeElement.style.display = 'block';
        document.body.classList.add('jw-modal-open');
        // this.ntkSmartModalService.getModal('mainModal').open();
      } else {
        this.mainModal.nativeElement.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
        // this.ntkSmartModalService.getModal('mainModal').close();
      }
    }
    this.openPopupForm = model;
    this.openFormChange.emit(model);
    if (this.openDirectUploadView) {
      this.newFileDialog = true;
    }
    if (model && this.isPopup && !this.startManagerRuned) {
      this.nodeService.startManagerAt(this.tree.currentPath + '');
      this.startManagerRuned = true;
    }

  }
  get openForm(): boolean {
    return this.openPopupForm;
  }

  openFilemanagerButtonLabel: string;


  selectedNode: NodeInterface;
  sideMenuClosed = true;

  // fmOpen = false;
  loading: boolean;
  newFileDialog = false;
  newFolderDialog = false;
  HighestZIndex = 0;
  startManagerRuned = false;
  @ViewChild('mainModal') mainModal: ElementRef;
  constructor(
    private store: FileManagerStoreService,
    private nodeService: NodeService,
    private nodeClickedService: NodeClickedService,
    public ngxSmartModalService: NtkSmartModalService,
    public translate: TranslateService,
    private cdr: ChangeDetectorRef,
    private el: ElementRef,
    private translateUiService: TranslateUiService,
  ) {
  
  }

  ngOnInit(): void {
    this.nodeService.serviceTree = this.tree;
    this.nodeClickedService.serviceTree = this.tree;
    if (!this.isPopup) {
      this.nodeService.startManagerAt(this.tree.currentPath + '');
      this.startManagerRuned = true;
    }
    // this.store.dispatch({ type: SET_PATH, payload: this.tree.currentPath });

    // this.nodeService.getNodes(this.tree.currentPath).then(() => {
    //   this.store.dispatch({type: SET_SELECTED_NODE, payload: });
    // });

    this.translate.get(this.openFilemanagerButtonLabelKey).subscribe((translation) => {
      this.openFilemanagerButtonLabel = translation;
    });

    this.store
      .getState(state => state.fileManagerState.inProcessingList)
      .subscribe((inProcessingList: Array<string>) => {
        this.cdr.detectChanges();
      });
    this.store
      .getState(state => state.fileManagerState.isLoading)
      .subscribe((isLoading: boolean) => {
        this.loading = isLoading;
        this.cdr.detectChanges();
      });
    this.store
      .getState(state => state.fileManagerState.selectedNode)
      .subscribe((selectedNode: NodeInterface) => {
        this.cdr.detectChanges();
        if (!selectedNode) {
          return;
        }
        // fixed highlighting error when closing node but not changing path
        if ((selectedNode.isExpanded && selectedNode.pathToNode !== this.nodeService.currentPath) && !selectedNode.stayOpen) {
          return;
        }

        this.handleFileManagerClickEvent({ type: 'select', node: selectedNode });
      });


  }
  ngAfterViewInit(): void {
    // this.HighestZIndex = this.findHighestZIndex('div');
  }
  onItemClicked(event: any): void {
    this.itemClicked.emit(event);
  }

  searchClicked(data: any): void {
    // console.log(data);

    const node = this.nodeService.findNodeById(data.id);
    this.ngxSmartModalService.getModal('searchModal').close();
    this.store.dispatch({ type: SET_SELECTED_NODE, payload: node });
    this.cdr.detectChanges();
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
        return this.ngxSmartModalService.getModal('renameModal').open();
      case 'rename':
        this.ngxSmartModalService.getModal('renameModal').close();

        this.nodeClickedService.rename(this.selectedNode, event.value);
        return this.onItemClicked({
          type: event.type,
          node: this.selectedNode,
          newName: event.value
        });

      case 'removeAsk':
        return this.ngxSmartModalService.getModal('confirmDeleteModal').open();
      case 'remove':
        this.ngxSmartModalService.getModal('confirmDeleteModal').close();

        this.nodeClickedService.initDelete(this.selectedNode);
        return this.onItemClicked({
          type: event.type,
          node: this.selectedNode
        });

      case 'createFolder':
        const parentid = this.nodeService.findNodeByPath(this.nodeService.currentPath).id;
        this.nodeClickedService.createFolder(parentid, event.payload);
        return this.onItemClicked({
          type: event.type,
          parentId: parentid,
          newDirName: event.payload
        });
      case 'createFile':
        if (this.openDirectUploadView && !this.openDirectUploadSave) {
          // tslint:disable-next-line: no-angle-bracket-type-assertion
          const selectedModel = <NodeInterface>{
            id: event.payload.uploadFileGUID,
            name: event.payload.uploadFileGUID,
            isFolder: false
          };
          this.selectedNode = selectedModel;
          this.confirmSelection();
          return;
        }

        const failMethod = (error: any) => {

        };
        const successMethod = (next: any) => {
          // tslint:disable-next-line: no-angle-bracket-type-assertion
          const selectedModel = <NodeInterface>{
            id: next.item.id,
            name: next.item.fileName,
            downloadLinksrc: next.item.downloadLinksrc,
            downloadThumbnailSrc: next.item.downloadThumbnailSrc,
            size: next.item.size,
            extension: next.item.extension,
            isFolder: false
          };
          this.selectedNode = selectedModel;
          if (this.openDirectUploadView) {
            this.confirmSelection();
            return;
          }
        };


        const catid = this.nodeService.findNodeByPath(this.nodeService.currentPath).id;

        this.nodeClickedService.createFile(catid, event.payload.fileName, event.payload.uploadFileGUID, successMethod, failMethod);

        return this.onItemClicked({
          type: event.type,
          parentId: catid,
          fileName: event.payload.fileName,
          uploadFileGUID: event.payload.uploadFileGUID
        });
    }
  }

  nodeClickHandler(node: NodeInterface, closing?: boolean): void {
    if (node.name === 'root') {
      return;
    }
    if (closing) {
      const parentNode = this.nodeService.findNodeByPath(this.nodeService.currentPath);
      this.store.dispatch({ type: SET_SELECTED_NODE, payload: parentNode });
      this.sideMenuClosed = true;
    } else {
      if (this.selectedNode === node && this.sideMenuClosed) { this.sideMenuClosed = false; }
      else if (this.selectedNode === node && !this.sideMenuClosed) { this.sideMenuClosed = true; }
      else if (this.selectedNode !== node && this.sideMenuClosed) { this.sideMenuClosed = false; }
      else if (this.selectedNode !== node && !this.sideMenuClosed) { this.sideMenuClosed = false; }
    }

    this.selectedNode = node;

    // todo investigate this workaround - warning: [File Manager] failed to find requested node for path: [path]
    if (!document.getElementById('side-view')) {
      this.cdr.detectChanges();
      return;
    }

    if (this.sideMenuClosed) {
      document.getElementById('side-view').classList.remove('selected');
    } else {
      document.getElementById('side-view').classList.add('selected');
    }
    this.cdr.detectChanges();
  }

  // todo stay DRY!
  highlightSelected(node: NodeInterface): void {
    let pathToNode = node.pathToNode;

    if (pathToNode.length === 0) {
      pathToNode = 'root';
    }

    const treeElement = this.getElementById(pathToNode, 'tree_');
    const fcElement = this.getElementById(pathToNode, 'fc_');
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
    let pathToParent = node.pathToParent;
    if (pathToParent === null || node.pathToNode === this.nodeService.currentPath) {
      return;
    }

    if (pathToParent.length === 0) {
      pathToParent = 'root';
    }

    const parentElement = this.getElementById(pathToParent, 'tree_');
    if (!parentElement) {
      console.warn('[File Manager] failed to find requested parent node for path:', pathToParent);
      return;
    }

    this.highilghtChildElement(parentElement);
  }

  private highilghtChildElement(el: HTMLElement, light: boolean = false): void {
    el.children[0] // appnode div wrapper
      .children[0] // ng template first item
      .classList.add('highlighted');

    if (light) {
      el.children[0]
        .children[0]
        .classList.add('light');
    }
  }

  private getElementById(id: string, prefix: string = ''): HTMLElement {
    const fullId = prefix + id;
    return document.getElementById(fullId);
  }

  private removeClass(className: string): void {
    Array.from(document.getElementsByClassName(className))
      .map((el) => el.classList.remove(className));
  }


  fmShowHide(act: boolean): void {
    this.openForm = act;
  }
  onActionOpen(status: boolean): void {
    this.fmShowHide(status);
  }

  backdropClicked(): void {
    // todo get rid of this ugly workaround
    // todo fire userCanceledLoading event
    this.store.dispatch({ type: SET_LOADING_STATE, payload: false });
  }

  handleUploadDialog(event: any): void {
    this.newFileDialog = event;
  }
  handleNewFolderDialog(event: any): void {
    this.newFolderDialog = event;
  }

  confirmSelection(): void {
    this.fmShowHide(false);
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
    this.fmShowHide(false);
  }
  AllowFileView(model: NodeInterface): boolean {
    if (
      !model ||
      model.isFolder ||
      !model.extension ||
      model.extension.length === 0 ||
      !this.configSelectFileType ||
      this.configSelectFileType.length === 0 ||
      this.configSelectFileType.find((t) => (t && model.extension && t.toLowerCase() === model.extension.toLowerCase()))
    ) {
      return true;
    }
    return false;
  }
  findHighestZIndex(elem: string): number {
    const elems = document.getElementsByTagName(elem);
    let highest = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);
    for (let i = 0; i < this.el.nativeElement.length; i++) {
      const zindex = Number.parseInt(
        document.defaultView.getComputedStyle(elems[i], null).getPropertyValue('z-index'),
        10
      );
      if (zindex > highest) {
        highest = zindex;
      }
    }
    console.log('HighestZIndex', highest);
    return highest;
  }
  AllowViewImage(node: NodeInterface): boolean {
    if (
      node.isFolder ||
      !node.extension ||
      node.extension.length === 0 ||
      !node.downloadLinksrc ||
      node.downloadLinksrc.length === 0
    ) {
      return false;
    }
    if (node.extension.toLowerCase() === 'png' || node.extension.toLowerCase() === 'jpeg'
      || node.extension.toLowerCase() === 'gif'
      || node.extension.toLowerCase() === 'jpg') {
      return true;
    }
    return false;
  }

}
