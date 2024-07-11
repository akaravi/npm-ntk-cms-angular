import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FileuploaderTestComponent } from './fileuploaderTest.component';
import { FileuploaderTestRoutes } from './fileuploaderTest.routing';
import { CmsFileUploaderModule } from 'projects/ntk-cms-fileuploader/src/public-api';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FileuploaderTestRoutes,
    CmsFileUploaderModule
  ],
  declarations: [FileuploaderTestComponent]
})
export class FileuploaderTestModule { }
