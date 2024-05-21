import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsFileUploaderModule } from 'projects/ntk-cms-fileuploader/src/public-api';
import { FileuploaderTestComponent } from './fileuploaderTest.component';
import { FileuploaderTestRoutes } from './fileuploaderTest.routing';

@NgModule({
  imports: [
    CommonModule,
    FileuploaderTestRoutes,
    CmsFileUploaderModule
  ],
  declarations: [FileuploaderTestComponent]
})
export class FileuploaderTestModule { }
