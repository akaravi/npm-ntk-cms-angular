import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerTestComponent } from './filemanagerTest.component';
import { FilemanagerTestRoutes } from './filemanagerTest.routing';
import { FileManagerModule } from 'projects/ntk-cms-filemanager/src/public-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FilemanagerTestRoutes,
    FileManagerModule,

  ],

  declarations: [ FileManagerTestComponent],
})
export class FilemanagerTestModule {}
