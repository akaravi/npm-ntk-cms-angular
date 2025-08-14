import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

import { first } from 'rxjs/operators';
import { ConfigInterface } from '../../interfaces/config.interface';
import { NodeInterface } from '../../interfaces/node.interface';
import { TreeModel } from '../../models/tree.model';
import { FileManagerStoreService, SET_SELECTED_NODE } from '../../services/file-manager-store.service';
import { NodeService } from '../../services/node.service';


@Component({
  selector: 'lib-filemanager-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  standalone: false
})
export class TreeComponent implements AfterViewInit, OnInit {
  @ContentChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>;

  @Input() treeModel: TreeModel;
  @Input() config: ConfigInterface;

  nodes: NodeInterface;
  currentTreeLevel = '';

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
    this.nodes = this.treeModel.nodes;

    // todo move this store to proper place
    this.store
      .getState(state => state.fileManagerState.path)
      .subscribe((path: string) => {
        this.nodeService.getNodes(path);
        this.currentTreeLevel = this.treeModel.currentPath;
        return this.treeModel.currentPath = path;
      });
  }

  ngAfterViewInit() {
    this.store
      .getState(state => state.fileManagerState.path)
      .pipe(first())
      .subscribe((path: string) => {
        const nodes = this.nodeService.findNodeByPath(path);
        this.store.dispatch({ type: SET_SELECTED_NODE, payload: nodes });
        this.cdr.detectChanges();
      });
  }
}




