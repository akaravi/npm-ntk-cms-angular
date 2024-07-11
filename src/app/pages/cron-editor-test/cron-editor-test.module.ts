import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CronEditorModule } from 'projects/ngx-ntk-cron-editor/src/public-api';
import { CronEditorTestComponent } from './cron-editor-test.component';
import { CronEditorTestRoutes } from './cron-editor-test.routing';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CronEditorTestRoutes,
    FormsModule,
    CronEditorModule
  ],

  declarations: [CronEditorTestComponent],
})
export class CronEditorTestModule { }
