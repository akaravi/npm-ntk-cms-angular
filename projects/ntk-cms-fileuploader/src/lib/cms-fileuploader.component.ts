import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUploaderPickerAdapter } from './fileUploaderPickerAdapter';
import { FilePreviewModel } from 'ngx-ntk-file-picker';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'cms-file-uploader',
  templateUrl: './cms-fileuploader.component.html',
  styleUrls: ['./cms-fileuploader.component.scss'],
})
export class CmsFileUploaderComponent implements OnInit {

  constructor(private http: HttpClient) { }
  adapter = new FileUploaderPickerAdapter(this.http);
  fileType: string | string[];
  @Output() optionUploadSuccess = new EventEmitter<FilePreviewModel>();
  @Input() set optionFileType(x: string | string[]) {
    if (x && x.length > 0) {
      this.fileType = x;
    }
  }
  @Input() set optionApiPath(x: string) {
    if (x && x.length > 0) {
      this.adapter.ApiPath = x;
    }
  }
  ngOnInit(): void {

  }
  uploadSuccess(event: FilePreviewModel): void {
    this.optionUploadSuccess.emit(event);
  }
}
