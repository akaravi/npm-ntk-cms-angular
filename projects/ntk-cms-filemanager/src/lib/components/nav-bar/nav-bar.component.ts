import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node.service';
import { FileManagerStoreService, SET_PATH } from '../../services/file-manager-store.service';

@Component({
  selector: 'lib-filemanager-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentPath: string[];

  constructor(
    private store: FileManagerStoreService,
    private nodeService: NodeService,
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
    this.store
      .getState(state => state.fileManagerState.path)
      .subscribe((data: string) => {
        this.nodeService.currentPath = data;
        this.currentPath = data.split('/');
      });
  }

  onClick(path: string[], index: number) {
    const newPath = path.slice(0, index + 1).join('/');
    this.store.dispatch({ type: SET_PATH, payload: newPath });
  }

}
