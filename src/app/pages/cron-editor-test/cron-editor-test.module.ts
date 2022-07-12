import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronEditorTestComponent } from './cron-editor-test.component';
import { CronEditorTestRoutes } from './cron-editor-test.routing';
import { CmsFileManagerModule } from 'projects/ntk-cms-filemanager/src/public-api';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    CronEditorTestRoutes,
    CmsFileManagerModule,
    MaterialCronJobsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule
  ],

  declarations: [ CronEditorTestComponent],
})
export class CronEditorTestModule {}
