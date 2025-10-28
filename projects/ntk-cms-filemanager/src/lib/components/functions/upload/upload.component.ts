import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { FilePreviewModel, ValidationError } from 'ngx-ntk-file-picker';
import { ErrorExceptionResult, FileUploadModel } from 'ntk-cms-api';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NodeService } from '../../../services/node.service';
import { FileUploaderPickerAdapter } from './fileUploaderPickerAdapter';

@Component({
  selector: 'lib-filemanager-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class UploadComponent implements OnInit, AfterViewInit {
  @Input() set optionSelectFileType(model: string | string[]) {
    this.fileExtensions = [];
    if (typeof model === 'string') {
      this.fileTypeAccept = '.' + model;
      this.fileExtensions.push(model);
      if (this.fileExtensions.length === 0) {
        this.fileExtensions = null;
      }

      return;
    }
    if (typeof model === typeof []) {
      let retOut = '';
      model.forEach((element) => {
        this.fileExtensions.push(element);
        if (retOut.length > 0) {
          retOut = retOut + ', ';
        }
        retOut = retOut + '.' + element;
      });
      this.fileTypeAccept = retOut;
      if (this.fileExtensions.length === 0) {
        this.fileExtensions = null;
      }
      return;
    }
  }
  constructor(private http: HttpClient, public nodeService: NodeService) {
    this.adapter.baseUploadURL =
      this.nodeService.serviceTree.config.baseUploadURL;
    this.adapter.routeUpload =
      this.nodeService.serviceTree.config.api.uploadFile;
    if (this.nodeService.serviceTree.config.options.fileUplodMaxCount > 0)
      this.fileUplodMaxCount =
        this.nodeService.serviceTree.config.options.fileUplodMaxCount;
    this.fileTypeAccept =
      this.nodeService.serviceTree.config.options.fileUplodTypeAccept;
    this.fileExtensions =
      this.nodeService.serviceTree.config.options.fileUplodExtensions;
  }

  get getCurrentPath(): any {
    const parentPath = this.nodeService.findNodeByPath(
      this.nodeService.currentPath
    ).id;
    return parentPath === 0 ? '' : parentPath;
  }
  @Output() createFile = new EventEmitter();
  @Input() openDialog = false;
  @Input() openSelectFileDescription = '';
  @Output() closeDialog = new EventEmitter();
  @Input() openDirectUploadSave = false;
  @Input() openDirectUploadView = false;
  adapter = new FileUploaderPickerAdapter(this.http);
  fileUplodMaxCount = 20;
  fileTypeAccept = ''; // '.jpg, .png'
  fileExtensions: string[] = []; // ['pdf', 'jpg', 'jpeg', 'png', 'mp4', 'css']
  counter = 0;

  // @Output() optionUploadSuccess = new EventEmitter<FilePreviewModel>();

  // uploadSuccess(event: any): void {
  //   this.optionUploadSuccess.emit(event);
  // }
  public myFiles: FilePreviewModel[] = [];

  ngOnInit(): void {}
  ngAfterViewInit(): void {}

  uploadFiles() {}
  allowClose = true;

  newClickedAction() {
    this.closeDialog.emit();
  }
  onFileAdded(model: FilePreviewModel): void {
    console.log('onFileAdded', model);
    this.myFiles.push(model);
  }
  onUploadSuccess(model: FilePreviewModel): void {
    if (!model.uploadResponse) {
    }
    const ret = model.uploadResponse as ErrorExceptionResult<FileUploadModel>;
    if (!ret.isSuccess) {
    }
    this.createFile.emit({
      fileName: model.fileName,
      uploadFileGUID: ret.item.fileKey,
    });
  }
  public onValidationError(error: ValidationError): void {
    alert(`Validation Error ${error.error} in ${error.file.name}`);
  }

  public onRemoveSuccess(e: FilePreviewModel) {
    console.log(e);
  }
  public myCustomValidator(file: File): Observable<boolean> {
    if (!file.name.includes('uploader')) {
      return of(true).pipe(delay(200));
    }
    // if (file.size > 50) {
    //   return this.http.get('https://vugar.free.beeceptor.com').pipe(map((res) =>  res === 'OK' ));
    // }
    return of(false).pipe(delay(200));
  }
}
