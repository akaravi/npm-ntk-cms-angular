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
  appLanguage = 'fa';

  constructor() {
    const treeConfig: ConfigInterface = {
      baseURL: 'https://apicms.ir/api/v1/',
      baseUploadURL: 'https://apifile.ir/api/v1/',
      api: {
        listFile: 'FileContent/GetAll',
        listFolder: 'FileCategory/GetAll',
        uploadFile: 'upload',
        downloadFile: 'download',
        deleteFile: 'FileContent',
        deleteFolder: 'FileCategory',
        createFolder: 'FileCategory',
        createFile: 'FileContent',
        getOneFile: 'FileContent',
        getOneFolder: 'FileCategory',
        renameFile: 'FileContent',
        renameFolder: 'FileCategory',
        searchFiles: 'FileCategory/GetAll',
      },
      options: {
        allowFolderDownload: DownloadModeEnum.DOWNLOAD_FILES,
        showFilesInsideTree: false,
        showSelectFile: true,
        showSelectFolder: false,
      },
    };

    this.tree = new TreeModel(treeConfig);
    this.node = this.tree.nodes;
  }
  selected: any;
  // noinspection JSUnusedLocalSymbols
  itemSelected(event: any): void {
    console.log(event);
    this.selected = event;
  }
}
