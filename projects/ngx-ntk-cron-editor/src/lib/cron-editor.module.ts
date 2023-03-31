import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {CronEditorComponent} from './cron-editor.component';
import {TimePickerComponent} from './time-picker/time-picker.component';
import {CronEditorTranslateService} from './services/cron-editor-translate.service';
import {PrefixPipe} from './pipes/prefix.pipe';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  providers: [CronEditorTranslateService],
  declarations: [CronEditorComponent, TimePickerComponent, PrefixPipe],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forRoot({extend: true}),
    MatTabsModule
  ],
  exports: [CronEditorComponent]
})
export class CronEditorModule {
}
