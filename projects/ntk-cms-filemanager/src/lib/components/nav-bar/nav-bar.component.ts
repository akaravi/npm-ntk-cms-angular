import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node.service';
import { FileManagerStoreService, SET_PARENT } from '../../services/file-manager-store.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  currentPath: string[];

  constructor(private store: FileManagerStoreService, private nodeService: NodeService) {}

  ngOnInit(): void {
    this.store
      .getState((state) => state.fileManagerState.parentId)
      .subscribe((data: number) => {
        this.nodeService.currentParentId = data;
        // todo : karavi
        // this.currentPath = data.split('/');
      });
  }

  onClick(path: string[], index: number): void {
    const newPath = path.slice(0, index + 1).join('/');

    let parentId = 0;
    Number.parseInt(newPath, parentId);
    this.store.dispatch({ type: SET_PARENT, payload: parentId });
  }
}
