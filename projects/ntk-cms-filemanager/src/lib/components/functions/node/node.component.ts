import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NodeInterface } from '../../../interfaces/node.interface';

import { DownloadModeEnum } from '../../../enums/download-mode.enum';
import { FileManagerStoreService, SET_PATH, SET_SELECTED_NODE } from '../../../services/file-manager-store.service';
import { NodeClickedService } from '../../../services/node-clicked.service';
import { NodeService } from '../../../services/node.service';

@Component({
  selector: 'lib-filemanager-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() node: NodeInterface;
  isSingleClick = true;

  constructor(
    private store: FileManagerStoreService,
    private nodeService: NodeService,
    private nodeClickedService: NodeClickedService,
    private cdr: ChangeDetectorRef
  ) {
    this.store
      .getState(state => state.fileManagerState.selectedNode)
      .subscribe((value: NodeInterface) => {
        this.selectedNode = value;
        this.cdr.detectChanges();
      });
  }
  selectedNode: NodeInterface;
  public method1CallForClick(event: MouseEvent) {
    event.preventDefault();

    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.showMenu();
      }
    }, 200);
  }

  // todo event.preventDefault for double click
  public method2CallForDblClick(event: any) {
    event.preventDefault();

    this.isSingleClick = false;
    this.open();
  }

  ngOnInit() {
  }

  private open() {
    if (!this.node.isFolder) {
      if (this.nodeService?.serviceTree?.config?.options?.allowFolderDownload === DownloadModeEnum.DOWNLOAD_DISABLED) {
        this.isSingleClick = true;
        this.showMenu();
        return;
      }

      this.nodeClickedService.startDownload(this.node);
      return;
    }

    if (this.node.stayOpen) {
      if (this.node.name === 'root') {
        if (this.selectedNode && this.selectedNode.id === this.node.id) {
          this.nodeService.foldAll(true);
        }
        else {
          this.nodeService.foldAll();
        }
      }

      this.store.dispatch({ type: SET_PATH, payload: this.node.pathToNode });
      return;
    }

    this.toggleNodeExpanded();

    if (this.node.isExpanded) {
      this.store.dispatch({ type: SET_PATH, payload: this.node.pathToNode });
    }

    this.setNodeSelectedState();
  }

  private showMenu() {
    this.store.dispatch({ type: SET_SELECTED_NODE, payload: this.node });
    this.cdr.detectChanges();
  }

  private toggleNodeExpanded() {
    this.node.isExpanded = !this.node.isExpanded;
  }

  private setNodeSelectedState() {
    if (!this.node.isExpanded) {
      document.getElementById('tree_' + this.node.pathToNode).classList.add('deselected');

      this.nodeService.foldRecursively(this.node);

      this.store.dispatch({ type: SET_PATH, payload: this.node.pathToParent });
    } else {
      document.getElementById('tree_' + this.node.pathToNode).classList.remove('deselected');
    }
  }
}
