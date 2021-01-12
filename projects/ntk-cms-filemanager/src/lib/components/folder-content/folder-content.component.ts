import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {NodeService} from '../../services/node.service';
import {NodeInterface} from '../../interfaces/node.interface';
import {FileManagerStoreService, SET_PARENT} from '../../services/file-manager-store.service';

@Component({
  selector: 'app-folder-content',
  templateUrl: './folder-content.component.html',
  styleUrls: ['./folder-content.component.scss']
})
export class FolderContentComponent implements OnInit {
  @Input() folderContentTemplate: TemplateRef<any>;
  @Input() folderContentBackTemplate: TemplateRef<any>;
  @Input() folderContentNewTemplate: TemplateRef<any>;

  @Output() openUploadDialog = new EventEmitter();

  nodes: NodeInterface;
  obj = Object;

  constructor(
    private nodeService: NodeService,
    private store: FileManagerStoreService
  ) {
  }

  ngOnInit(): void {
    this.nodes = this.nodeService.tree.nodes;
    this.store.getState(state => state.fileManagerState.parentId).subscribe((parentId: number) => {
      // debugger;
      this.nodes = this.nodeService.findFolderById(parentId);
      });
  }

  onActionBack(node : NodeInterface): void {
    this.store.dispatch({type: SET_PARENT, payload: node.parentId });

  }

  newClickedAction(): void {
    this.openUploadDialog.emit(true);
  }
}
