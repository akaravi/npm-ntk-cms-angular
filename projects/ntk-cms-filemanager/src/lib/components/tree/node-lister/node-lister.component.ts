import { ChangeDetectorRef, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

import { NodeInterface } from '../../../interfaces/node.interface';
import { FileManagerStoreService } from '../../../services/file-manager-store.service';


@Component({
  selector: 'lib-filemanager-node-lister',
  templateUrl: './node-lister.component.html',
  styleUrls: ['./node-lister.component.scss'],
  standalone: false
})
export class NodeListerComponent implements OnInit {
  @ContentChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>;
  @Input() nodes: NodeInterface;
  @Input() showFiles: boolean;

  obj = Object;

  constructor(
    private store: FileManagerStoreService,
    private cdr: ChangeDetectorRef) {
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
  }
}




