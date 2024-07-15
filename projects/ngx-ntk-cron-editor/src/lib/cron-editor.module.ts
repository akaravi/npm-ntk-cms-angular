import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CronEditorComponent } from './cron-editor.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { CronEditorTranslateService } from './services/cron-editor-translate.service';
// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/cron/', '.json');
}
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    //TranslateModule.forRoot({}),
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (TranslateHttpLoaderFactory) ,
    //     deps: [HttpClient]
    //   },
    //   //extend: true
    // }
    //),
    TranslateModule.forRoot({extend: false}),
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
    CronEditorTranslateService
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
