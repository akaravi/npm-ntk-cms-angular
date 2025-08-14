import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CmsFileManagerModule } from 'ntk-cms-filemanager';
import { FileManagerTestComponent } from './filemanagerTest.component';

const routes: Routes = [
  { path: '', component: FileManagerTestComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FileManagerTestComponent,
    RouterModule.forChild(routes),
    CmsFileManagerModule
  ]
})
export class FileManagerTestModule { }
