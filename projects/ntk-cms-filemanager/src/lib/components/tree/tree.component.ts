import { AfterViewInit, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { NodeInterface } from '../../interfaces/node.interface';
import { TreeModel } from '../../models/tree.model';
import { NodeService } from '../../services/node.service';
import { first } from 'rxjs/operators';
import { FileManagerStoreService, SET_SELECTED_NODE } from '../../services/file-manager-store.service';
import { ConfigInterface } from 'projects/ntk-cms-filemanager/src/public-api';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements AfterViewInit, OnInit {
  @ContentChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>;

  @Input() treeModel: TreeModel;
  @Input() config: ConfigInterface;

  nodes: NodeInterface;
  currentTreeLevel = 0;

  constructor(private nodeService: NodeService, private store: FileManagerStoreService) {}

  ngOnInit(): void {
    this.nodes = this.treeModel.nodes;
    // todo move this store to proper place
    this.store
      .getState((state) => state.fileManagerState.parentId)
      .subscribe((parentId: number) => {
        this.nodeService.SelectFolderById(parentId, true);
        this.currentTreeLevel = this.treeModel.currentPath;
        this.treeModel.currentPath = parentId;
      });
  }

  ngAfterViewInit(): void {
    // this.store
    //   .getState((state) => state.fileManagerState.parentId)
    //   .pipe(first())
    //   .subscribe((parentId: number) => {
    //     const nodes = this.nodeService.findFolderById(parentId);
    //     this.store.dispatch({ type: SET_SELECTED_NODE, payload: nodes });
    //   });
  }
}
