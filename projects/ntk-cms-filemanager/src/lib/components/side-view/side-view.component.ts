import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NodeInterface } from '../../interfaces/node.interface';
import { DownloadModeEnum } from '../../enums/download-mode.enum';

@Component({
  selector: 'app-side-view',
  templateUrl: './side-view.component.html',
  styleUrls: ['./side-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideViewComponent implements OnInit {
  @Input() sideViewTemplate: TemplateRef<any>;

  @Input() node: NodeInterface;
  @Input() allowFolderDownload: DownloadModeEnum = DownloadModeEnum.DOWNLOAD_DISABLED;

  @Output() clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: any, type: string): void {
    this.clickEvent.emit({ type, event, node: this.node });
  }

  isDisabled(): boolean {
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
      !node.type ||
      node.type.length === 0 ||
      !node.downloadLinksrc ||
      node.downloadLinksrc.length === 0
    ) {
      return false;
    }
    if (node.type.toLowerCase() === 'mp3' ) {
      return true;
    }
    return false;
  }
  AllowViewImage(node: NodeInterface): boolean {
    if (
      node.isFolder ||
      !node.type ||
      node.type.length === 0 ||
      !node.downloadLinksrc ||
      node.downloadLinksrc.length === 0
    ) {
      return false;
    }
    if (node.type.toLowerCase() === 'png' || node.type.toLowerCase() === 'jpeg'
    || node.type.toLowerCase() === 'gif'
    || node.type.toLowerCase() === 'jpg') {
      return true;
    }
    return false;
  }
}
