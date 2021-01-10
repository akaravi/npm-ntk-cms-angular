import {Component, Input, OnInit} from '@angular/core';
import {NodeInterface} from '../../../interfaces/node.interface';

import {NodeService} from '../../../services/node.service';
import {NodeClickedService} from '../../../services/node-clicked.service';
import {FileManagerStoreService, SET_PARENT, SET_SELECTED_NODE} from '../../../services/file-manager-store.service';
import {DownloadModeEnum} from '../../../enums/download-mode.enum';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() node: NodeInterface;
  isSingleClick = true;

  constructor(
    private store: FileManagerStoreService,
    private nodeService: NodeService,
    private nodeClickedService: NodeClickedService
  ) {
  }

  public method1CallForClick(event: MouseEvent): void {
    event.preventDefault();

    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.showMenu();
      }
    }, 500);
  }

  // todo event.preventDefault for double click
  public method2CallForDblClick(event: any): void{
    event.preventDefault();

    this.isSingleClick = false;
    this.open();
  }

  ngOnInit(): void {
  }

  private open(): void{
    // debugger;
    if (!this.node.isFolder) {
      if (this.nodeService?.tree?.config?.options?.allowFolderDownload === DownloadModeEnum.DOWNLOAD_DISABLED) {
        this.isSingleClick = true;
        this.showMenu();
        return;
      }

      this.nodeClickedService.startDownload(this.node);
      return;
    }

    if (this.node.stayOpen) {

      if (this.node.id === 0) {
         this.nodeService.foldAll();
      }

      this.store.dispatch({type: SET_PARENT, payload: this.node.id });
      return;
    }

    this.toggleNodeExpanded();

    if (this.node.isExpanded) {
      this.store.dispatch({type: SET_PARENT, payload: this.node.id });
    }

    this.setNodeSelectedState();
  }

  private showMenu(): void {
    this.store.dispatch({type: SET_SELECTED_NODE, payload: this.node});
  }

  private toggleNodeExpanded(): void {
    this.node.isExpanded = !this.node.isExpanded;
  }

  private setNodeSelectedState(): void {
    // debugger;
    if (!this.node.isExpanded) {
      document.getElementById('tree_' + this.node.id).classList.add('deselected');

      this.nodeService.foldRecursively(this.node);

      this.store.dispatch({type: SET_PARENT, payload: this.node.id});
    } else {
      document.getElementById('tree_' + this.node.id).classList.remove('deselected');
    }
  }
}
