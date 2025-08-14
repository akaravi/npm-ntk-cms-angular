import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CronEditorTestComponent } from './cron-editor-test.component';

const routes: Routes = [
  { path: '', component: CronEditorTestComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CronEditorTestComponent,
    RouterModule.forChild(routes)
  ]
})
export class CronEditorTestModule { }
