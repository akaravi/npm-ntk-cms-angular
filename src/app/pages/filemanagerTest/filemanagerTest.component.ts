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
  tree3: TreeModel;
  // node: NodeInterface;
  appLanguage = 'fa';

  constructor() {
    const treeConfig1: ConfigInterface = {
      baseURL: 'https://apicms.ir/api/v2/',
      baseUploadURL: 'https://apifile.ir/api/v2/',
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
        title: 'Select File',
        allowFolderDownload: DownloadModeEnum.DOWNLOAD_FILES,
        showFilesInsideTree: false,
        showSelectFile: true,
        showSelectFolder: false,
        fileUplodMaxCount:20,
        fileUplodExtensions:[],
        fileUplodTypeAccept:''
      },
    };

    const treeConfig2: ConfigInterface = {
      baseURL: 'https://apicms.ir/api/v2/',
      baseUploadURL: 'https://apifile.ir/api/v2/',
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
        title: 'Hello World 2',
        allowFolderDownload: DownloadModeEnum.DOWNLOAD_FILES,
        showFilesInsideTree: false,
        showSelectFile: true,
        showSelectFolder: false,
        fileUplodMaxCount:20,
        fileUplodExtensions:[],
        fileUplodTypeAccept:''
      },
    };

    this.tree1 = new TreeModel(treeConfig1);
    this.tree2 = new TreeModel(treeConfig2);
    this.tree3 = new TreeModel(treeConfig1);
  }
  // optionsFileManager: ComponentOptionModel = new ComponentOptionModel();
  openForm = false;
  selected1: NodeInterface;
  selected2: NodeInterface;
  selected3: NodeInterface;
  // noinspection JSUnusedLocalSymbols

  onActionFileSelect1(event: NodeInterface): void {
    console.log(event);
    this.selected1 = event;
  }
  onActionFileSelect2(event: NodeInterface): void {
    console.log(event);
    this.selected2 = event;
  }
  onActionFileSelect3(event: NodeInterface): void {
    console.log(event);
    this.selected3 = event;
  }
  onActionOpen(status: boolean): void {
    // if (this.optionsFileManager.childMethods) {
    //   this.optionsFileManager.childMethods.ActionOpen(status);
    // }
    this.openForm = status;
  }
  onActionTest(): void {
    this.openForm = true;
  }
}
