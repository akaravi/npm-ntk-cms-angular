import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerTestComponent } from './filemanagerTest.component';
import { FilemanagerTestRoutes } from './filemanagerTest.routing';
import { FileManagerModule } from 'projects/ntk-cms-filemanager/src/public-api';

@NgModule({
  imports: [
    CommonModule,
    FilemanagerTestRoutes,

  ],

  declarations: [ FileManagerTestComponent],
})
export class FilemanagerTestModule {}
