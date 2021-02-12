import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploaderTest.component.html',
  styleUrls: ['./fileuploaderTest.component.scss'],
})
export class FileuploaderTestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  uploadSuccess(event: any): void {
    console.log(event);
  }
}
