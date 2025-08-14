import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { CmsFileManagerModule, TreeModel, DownloadModeEnum } from 'ntk-cms-filemanager';
import {
  FileCategoryModel,
  FileContentModel,
} from 'ntk-cms-api';

@Component({
  selector: 'app-filemanager-test',
  templateUrl: './filemanagerTest.component.html',
  styleUrls: ['./filemanagerTest.component.scss'],
  standalone: true,
  imports: [CommonModule, CmsFileManagerModule]
})
export class FileManagerTestComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.translate.use('en');
  }

  appLanguage = 'en';
  openForm = false;
  tree1: TreeModel = new TreeModel({
    baseURL: '',
    baseUploadURL: '',
    api: null,
    options: {
      title: 'File Manager 1',
      allowFolderDownload: 0,
      showFilesInsideTree: true,
      showSelectFile: true,
      showSelectFolder: true,
      fileUplodMaxCount: 10,
      fileUplodTypeAccept: '*',
      fileUplodExtensions: []
    }
  });
  tree2: TreeModel = new TreeModel({
    baseURL: '',
    baseUploadURL: '',
    api: null,
    options: {
      title: 'File Manager 2',
      allowFolderDownload: DownloadModeEnum.DOWNLOAD_FILES,
      showFilesInsideTree: true,
      showSelectFile: true,
      showSelectFolder: true,
      fileUplodMaxCount: 10,
      fileUplodTypeAccept: '*',
      fileUplodExtensions: []
    }
  });
  tree3: TreeModel = new TreeModel({
    baseURL: '',
    baseUploadURL: '',
    api: null,
    options: {
      title: 'File Manager 3',
      allowFolderDownload: DownloadModeEnum.DOWNLOAD_FILES,
      showFilesInsideTree: true,
      showSelectFile: true,
      showSelectFolder: true,
      fileUplodMaxCount: 10,
      fileUplodTypeAccept: '*',
      fileUplodExtensions: []
    }
  });
  selected1: any;
  selected2: any;
  selected3: any;

  onActionFileSelect1(model: FileContentModel | FileCategoryModel): void {
    this.selected1 = model;
    console.log('Selected 1:', model);
  }

  onActionFileSelect2(model: FileContentModel | FileCategoryModel): void {
    this.selected2 = model;
    console.log('Selected 2:', model);
  }

  onActionFileSelect3(model: FileContentModel | FileCategoryModel): void {
    this.selected3 = model;
    console.log('Selected 3:', model);
  }

  onActionOpen(value: boolean): void {
    this.openForm = value;
  }

  onActionTest(): void {
    console.log('Test button clicked');
  }

  onActionSelect(model: FileContentModel | FileCategoryModel): void {
    console.log('Selected:', model);
  }
}



