import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output,   EventEmitter} from '@angular/core';
import { FileUploaderPickerAdapter } from './fileUploaderPickerAdapter';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'cms-file-uploader',
  templateUrl: './cms-fileuploader.component.html',
  styleUrls: ['./cms-fileuploader.component.scss'],
})
export class CmsFileUploaderComponent implements OnInit {

  constructor(private http: HttpClient) { }
  adapter = new FileUploaderPickerAdapter(this.http);
  fileType: string|string[];
  @Output() optionUploadSuccess = new EventEmitter<any>();
  @Input() set optionFileType(x: string|string[]) {
    this.fileType = x;
  }

  ngOnInit(): void {

  }
  uploadSuccess(event: any): void {
    this.optionUploadSuccess.emit(event);
  }
}
