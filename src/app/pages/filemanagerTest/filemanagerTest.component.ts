import { Component } from '@angular/core';
import {
  ConfigInterface,
  DownloadModeEnum,
  NodeInterface,
  TreeModel,
} from 'projects/ntk-cms-filemanager/src/public-api';

// import {ConfigInterface, NodeInterface, TreeModel} from '../../projects/file-manager/src/public_api';
// import {DownloadModeEnum} from '../../projects/file-manager/src/file-manager/enums/download-mode.enum';

@Component({
  selector: 'app-root',
  templateUrl: './filemanagerTest.component.html',
  styleUrls: ['./filemanagerTest.component.scss'],
})
export class FileManagerTestComponent {
  tree: TreeModel;
  node: NodeInterface;
  appLanguage = 'sk';

  constructor() {
    const treeConfig: ConfigInterface = {
      baseURL: 'https://apicms.ir/api/v1/',
      api: {
        listFile: 'filecontent/getall',
        uploadFile: 'api/upload',
        downloadFile: 'api/download',
        deleteFile: 'api/remove',
        createFolder: 'api/directory',
        renameFile: 'api/rename',
        searchFiles: 'api/search',
      },
      options: {
        allowFolderDownload: DownloadModeEnum.DOWNLOAD_DISABLED,
        showFilesInsideTree: false,
      },
    };

    this.tree = new TreeModel(treeConfig);
    this.node = this.tree.nodes;
  }

  // noinspection JSUnusedLocalSymbols
  itemSelected(event: any): void {
    console.log(event);
  }
}
