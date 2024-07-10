import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FileuploaderTestComponent } from './fileuploaderTest.component';
import { FileuploaderTestRoutes } from './fileuploaderTest.routing';
import { CmsFileUploaderModule } from 'projects/ntk-cms-fileuploader/src/public-api';

@NgModule({
  imports: [
    CommonModule,
    FileuploaderTestRoutes,
    CmsFileUploaderModule
  ],
  declarations: [FileuploaderTestComponent]
})
export class FileuploaderTestModule { }
