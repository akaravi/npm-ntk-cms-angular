import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NodeService } from '../../../services/node.service';
import { VoidExpression } from 'typescript';
import { NodeClickedService } from '../../../services/node-clicked.service';
import { FileContentModel, FileUpload, ErrorExceptionResult } from 'ntk-cms-api';
import { FileUploaderPickerAdapter } from './fileUploaderPickerAdapter';
import { FilePreviewModel } from 'ngx-awesome-uploader';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UploadComponent implements OnInit {
  @Input() openDialog: any;

  @Output() closeDialog = new EventEmitter();
  @Output() createDir = new EventEmitter();

  newFolder = false;
  counter = 0;

  constructor(
    private http: HttpClient,
    private nodeService: NodeService,
    private nodeClickedService: NodeClickedService,
  ) {}

  adapter = new FileUploaderPickerAdapter(this.http);

  ngOnInit(): void {}

  uploadSuccess(event: any): void {
    console.log(event);
  }

  get getCurrentPath(): number {
    const parentPath = this.nodeService.findFolderById(this.nodeService.currentParentId).id;
    return parentPath === 0 ? 0 : parentPath;
  }

  uploadFiles(): void {
    // this.uploader.uploadStoredFiles();
  }
  onFileAdded(model: FilePreviewModel): void {
    console.log('onFileAdded', model);
  }
  onUploadSuccess(model: FilePreviewModel): void {
    console.log('onUploadSuccess', model);
    if (!model.uploadResponse) {
    }
    const ret = model.uploadResponse as ErrorExceptionResult<FileUpload>;
    if (!ret.IsSuccess) {
    }
    const fileModel = new FileContentModel();
    fileModel.FileName = model.fileName;
    fileModel.UploadFileGUID = ret.Item.FileKey;
    if (this.nodeService.currentParentId > 0) {
      fileModel.LinkCategoryId = this.nodeService.currentParentId;
    }
    this.nodeClickedService.actionCreateFile(fileModel);
  }
  createNewFolder(input?: string): void {
    if (!this.newFolder) {
      this.newFolder = true;
    } else {
      this.newFolder = false;
      input = input + '';
      if (input.length > 0) {
        this.createDir.emit(input);
        this.newClickedAction();
      }
    }
  }

  newClickedAction(): void {
    // this.uploader.cancelAll();
    this.closeDialog.emit();
  }
}
