import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FileUploaderTestComponent } from './fileuploaderTest.component';

const routes: Routes = [
  { path: '', component: FileUploaderTestComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, FileUploaderTestComponent,
    RouterModule.forChild(routes)
  ]
})
export class FileUploaderTestModule { }
