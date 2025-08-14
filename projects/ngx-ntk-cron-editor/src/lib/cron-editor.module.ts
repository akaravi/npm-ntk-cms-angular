import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CronEditorComponent } from './cron-editor.component';
import { TranslateUiService } from './services/translateUi.service';
import { TimePickerComponent } from './time-picker/time-picker.component';

// Required for AOT compilation
@NgModule({
  declarations: [CronEditorComponent, TimePickerComponent],
  imports: [HttpClientModule, CommonModule, TranslateModule, FormsModule],
  exports: [CronEditorComponent, TimePickerComponent],
  providers: [TranslateUiService],
})
export class CronEditorModule {
  static forRoot(): ModuleWithProviders<CronEditorModule> {
    return {
      ngModule: CronEditorModule,
      providers: [TranslateService],
    };
  }
}
