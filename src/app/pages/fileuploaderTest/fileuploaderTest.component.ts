import { FilePickerComponent } from 'ngx-awesome-uploader';
import { ValidationError } from 'ngx-awesome-uploader';
import { FilePreviewModel } from 'ngx-awesome-uploader';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { FileUploaderPickerAdapter } from './fileUploaderPickerAdapter';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploaderTest.component.html',
  styleUrls: ['./fileuploaderTest.component.scss'],
})
export class FileuploaderTestComponent implements OnInit {
  adapter = new FileUploaderPickerAdapter(this.http);

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  uploadSuccess(event: any): void {
    console.log(event);
  }
}
