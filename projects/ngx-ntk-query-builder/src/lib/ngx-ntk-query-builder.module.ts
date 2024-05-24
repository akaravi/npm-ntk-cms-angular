import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxQueryBuilderComponent } from './ngx-ntk-query-builder.component';

export function CreateTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, '/assets/i18n/querybuilder/', '.json');
}
@NgModule({
  declarations: [
    NgxQueryBuilderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (CreateTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    NgxQueryBuilderComponent
  ],
  providers: [
    TranslateService,
  ]
})
export class NgxNtkQueryBuilderModule {
  static forRoot(): ModuleWithProviders<NgxNtkQueryBuilderModule> {
    return {
      ngModule: NgxNtkQueryBuilderModule,
      providers: [TranslateService]
    };
  }
}
