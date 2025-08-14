import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FilePickerService, FilePreviewModel } from 'ngx-ntk-file-picker';
import { FileUploaderPickerAdapter } from './fileUploaderPickerAdapter';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'cms-file-uploader',
  templateUrl: './cms-fileuploader.component.html',
  styleUrls: ['./cms-fileuploader.component.scss'],
  providers: [FilePickerService],
  standalone: false,
})
export class CmsFileUploaderComponent implements OnInit {
  constructor(@Inject(HttpClient) private http: HttpClient) {}
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
  ngOnInit(): void {}
  uploadSuccess(event: FilePreviewModel): void {
    this.optionUploadSuccess.emit(event);
  }
}
