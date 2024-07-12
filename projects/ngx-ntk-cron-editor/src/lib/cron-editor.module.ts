import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CronEditorComponent } from './cron-editor.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/cron/', '.json'),
        deps: [HttpClient]
      }
    }
    ),
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
    TranslateService
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
