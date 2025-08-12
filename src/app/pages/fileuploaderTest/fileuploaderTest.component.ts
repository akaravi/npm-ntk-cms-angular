import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploaderTest.component.html',
  styleUrls: ['./fileuploaderTest.component.scss'],
})
export class FileuploaderTestComponent {

  constructor(private http: HttpClient) { }


  uploadSuccess(event: any): void {
    console.log(event);
  }
}
