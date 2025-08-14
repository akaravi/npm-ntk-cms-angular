import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

import { NodeInterface } from '../../interfaces/node.interface';
import { FileManagerStoreService } from '../../services/file-manager-store.service';
import { NodeService } from '../../services/node.service';


@Component({
  selector: 'lib-filemanager-folder-content',
  templateUrl: './folder-content.component.html',
  styleUrls: ['./folder-content.component.scss'],
  standalone: false
})
export class FolderContentComponent implements OnInit {
  @Input() folderContentTemplate: TemplateRef<any>;
  @Input() folderContentBackTemplate: TemplateRef<any>;
  @Input() folderContentNewFolderTemplate: TemplateRef<any>;
  @Input() folderContentNewFileTemplate: TemplateRef<any>;
  @Input() folderContentReloadTemplate: TemplateRef<any>; // karavi

  @Output() openUploadDialog = new EventEmitter();
  @Output() openNewFolderDialog = new EventEmitter();

  nodes: NodeInterface;
  obj = Object;

  constructor(
    private nodeService: NodeService,
    private store: FileManagerStoreService,
    private cdr: ChangeDetectorRef
  ) {
    this.store
      .getState(state => state.fileManagerState.inProcessingList)
      .subscribe(() => {
        this.cdr.detectChanges();
      });
    this.store
      .getState(state => state.fileManagerState.selectedNode)
      .subscribe(() => {
        this.cdr.detectChanges();
      });
  }

  ngOnInit() {
    this.nodes = this.nodeService.serviceTree.nodes;

    this.store
      .getState(state => state.fileManagerState.path)
      .subscribe((path: string) => {
        this.nodes = this.nodeService.findNodeByPath(path);
      });
  }

  newFileClickedAction() {
    this.openUploadDialog.emit(true);
  }
  newFolderClickedAction() {
    this.openNewFolderDialog.emit(true);
  }
}




