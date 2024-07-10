import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CronEditorComponent } from './cron-editor.component';
import { PrefixPipe } from './pipes/prefix.pipe';
import { TimePickerComponent } from './time-picker/time-picker.component';

export function CreateTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, '/assets/i18n/cron/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (CreateTranslateLoader),
        deps: [HttpClient]
      }
    }
    ),
    FormsModule,

    MatTabsModule
  ],
  declarations: [
    CronEditorComponent,
    TimePickerComponent,
    PrefixPipe
  ],
  exports: [
    CronEditorComponent
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
