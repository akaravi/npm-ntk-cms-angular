import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileuploaderTestComponent } from './fileuploaderTest.component';
import { FileuploaderTestRoutes } from './fileuploaderTest.routing';
import { FilePickerModule } from  'ngx-awesome-uploader';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FileuploaderTestRoutes,
    HttpClientModule,
    FilePickerModule
  ],
  declarations: [FileuploaderTestComponent]
})
export class FileuploaderTestModule { }
