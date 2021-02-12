import { CmsFileUploaderComponent } from './cms-fileuploader.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilePickerModule } from 'ngx-awesome-uploader';


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    FilePickerModule
  ],
  declarations: [
    CmsFileUploaderComponent,

  ],
  exports: [
    CmsFileUploaderComponent
  ],
  providers: [

  ]

})
export class CmsFileUploaderModule {

}
