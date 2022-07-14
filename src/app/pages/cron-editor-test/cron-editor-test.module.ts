import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronEditorTestComponent } from './cron-editor-test.component';
import { CronEditorTestRoutes } from './cron-editor-test.routing';
import { CronEditorModule } from 'projects/ngx-ntk-cron-editor/src/public-api';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CronEditorTestRoutes,
    FormsModule,
    TranslateModule.forRoot({extend: true}),
    CronEditorModule
  ],

  declarations: [ CronEditorTestComponent],
})
export class CronEditorTestModule {}
