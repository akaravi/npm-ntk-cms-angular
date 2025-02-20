import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CronEditorComponent } from './cron-editor.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { TranslateUiService } from './services/translateUi.service';

// Required for AOT compilation
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    TranslateModule,
    FormsModule,
  ],
  declarations: [
    CronEditorComponent,
    TimePickerComponent,
  ],
  exports: [
    CronEditorComponent,
    TimePickerComponent,
  ],
  providers: [
    TranslateUiService
  ],
})

export class CronEditorModule {
  static forRoot(): ModuleWithProviders<CronEditorModule> {
    return {
      ngModule: CronEditorModule,
      providers: [TranslateService]
    };
  }
}
