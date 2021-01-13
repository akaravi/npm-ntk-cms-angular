import { Component } from '@angular/core';
import {
  ComponentOptionModel,
  ConfigInterface,
  DownloadModeEnum,
  NodeInterface,
  TreeModel,
} from 'projects/ntk-cms-filemanager/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './filemanagerTest.component.html',
  styleUrls: ['./filemanagerTest.component.scss'],
})
export class FileManagerTestComponent {
  tree1: TreeModel;
  tree2: TreeModel;
  // node: NodeInterface;
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
        showSelectFileType: []
      },
    };

    this.tree1 = new TreeModel(treeConfig);
    this.tree2 = new TreeModel();
    this.tree2.config.options.showSelectFileType = ['png', 'jpg'];
    // this.node = this.tree.nodes;
  }
  optionsFileManager: ComponentOptionModel = new ComponentOptionModel();

  selected1: any;
  selected2: any;
  // noinspection JSUnusedLocalSymbols
  onActionFileSelect1(event: any): void {
    console.log(event);
    this.selected1 = event;
  }
  onActionFileSelect2(event: any): void {
    console.log(event);
    this.selected2 = event;
  }
  onActionOpen(status: boolean): void {
    if (this.optionsFileManager.childMethods) {
      this.optionsFileManager.childMethods.ActionOpen(status);
    }
  }
}
