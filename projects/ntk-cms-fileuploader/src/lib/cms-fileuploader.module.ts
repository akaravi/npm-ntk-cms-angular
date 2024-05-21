import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { CmsFileUploaderComponent } from './cms-fileuploader.component';


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
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
