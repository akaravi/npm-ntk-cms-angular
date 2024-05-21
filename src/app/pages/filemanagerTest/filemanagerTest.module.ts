import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsFileManagerModule } from 'projects/ntk-cms-filemanager/src/public-api';
import { FileManagerTestComponent } from './filemanagerTest.component';
import { FilemanagerTestRoutes } from './filemanagerTest.routing';

@NgModule({
  imports: [
    CommonModule,
    FilemanagerTestRoutes,
    CmsFileManagerModule,

  ],

  declarations: [FileManagerTestComponent],
})
export class FilemanagerTestModule { }
