import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { DownloadModeEnum } from '../../enums/download-mode.enum';
import { NodeInterface } from '../../interfaces/node.interface';
import { FileManagerStoreService } from '../../services/file-manager-store.service';

@Component({
  selector: 'lib-filemanager-side-view',
  templateUrl: './side-view.component.html',
  styleUrls: ['./side-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideViewComponent implements OnInit {
  @Input() sideViewTemplate: TemplateRef<any>;

  @Input() node: NodeInterface;
  @Input() allowFolderDownload: DownloadModeEnum = DownloadModeEnum.DOWNLOAD_DISABLED;

  @Output() clickEvent = new EventEmitter();

  constructor(
    private store: FileManagerStoreService,
    private cdr: ChangeDetectorRef
  ) {
    this.store
      .getState(state => state.fileManagerState.isLoading)
      .subscribe((isLoading: boolean) => {
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

  onClick(event: any, type: string) {
    this.clickEvent.emit({ type, event, node: this.node });
  }

  isDisabled() {
    if (this.allowFolderDownload === DownloadModeEnum.DOWNLOAD_DISABLED) {
      return true;
    } else if (this.allowFolderDownload === DownloadModeEnum.DOWNLOAD_FILES && this.node.isFolder) {
      return true;
    }

    return false;
  }
  AllowPlayMP3(node: NodeInterface): boolean {
    if (
      node.isFolder ||
      !node.extension ||
      node.extension.length === 0 ||
      !node.downloadLinksrc ||
      node.downloadLinksrc.length === 0
    ) {
      return false;
    }
    if (node.extension.toLowerCase() === 'mp3') {
      return true;
    }
    return false;
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
