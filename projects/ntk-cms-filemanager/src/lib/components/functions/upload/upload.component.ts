import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FineUploader } from 'fine-uploader';
import { NodeService } from '../../../services/node.service';
import { VoidExpression } from 'typescript';
import { NodeClickedService } from '../../../services/node-clicked.service';
import { FileContentModel, FileUpload, ErrorExceptionResult } from 'ntk-cms-api';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss', './fine-uploader/fine-uploader.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UploadComponent implements OnInit, AfterViewInit {
  @Input() openDialog: any;

  @Output() closeDialog = new EventEmitter();
  @Output() createDir = new EventEmitter();

  uploader: FineUploader;
  newFolder = false;
  counter = 0;

  constructor(
    private http: HttpClient,
    private nodeService: NodeService,
    private nodeClickedService: NodeClickedService,
  ) {}

  ngAfterViewInit(): void {
    this.uploader = new FineUploader({
      debug: false,
      autoUpload: false,
      maxConnections: 1, // todo configurable
      element: document.getElementById('fine-uploader'),
      template: document.getElementById('fine-uploader-template'),
      request: {
        endpoint: this.nodeService.tree.config.baseUploadURL + this.nodeService.tree.config.api.uploadFile,
        // forceMultipart: false,
        paramsInBody: false,
        params: {
          parentPath: this.getCurrentPath,
        },
      },
      retry: {
        enableAuto: false,
      },
      
      callbacks: {
        onSubmitted: (ret) => {
          this.counter++;
        },
        onComplete: (id: number, name: string, responseJSON: ErrorExceptionResult<FileUpload>, xhr: XMLHttpRequest) => {
          debugger;
          if (!responseJSON.IsSuccess) {
            console.log(responseJSON);
            return;
          }
          if (!responseJSON.Item.FileKey || responseJSON.Item.FileKey.length === 0) {
            console.log(responseJSON);
            return;
          }
          let model = new FileContentModel();
          model.UploadFileGUID = responseJSON.Item.FileKey;
          model.FileName = name;
          if (this.getCurrentPath > 0) {
            model.LinkCategoryId = this.getCurrentPath;
          }
          this.nodeClickedService.actionCreateFile(model);
        },
        onCancel: () => {
          this.counter < 0 ? console.warn('wtf?') : this.counter--;
        },
        onAllComplete: (succ: any, fail: any) => {
          if (succ.length > 0) {
            this.counter = 0;
            this.nodeService.refreshCurrentPath();
          }
        },
      },
    });
  }

  ngOnInit(): void {}

  get getCurrentPath(): number {
    const parentPath = this.nodeService.findFolderById(this.nodeService.currentParentId).id;
    return parentPath === 0 ? 0 : parentPath;
  }

  uploadFiles(): void {
    this.uploader.uploadStoredFiles();
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
    this.uploader.cancelAll();
    this.closeDialog.emit();
  }
}
