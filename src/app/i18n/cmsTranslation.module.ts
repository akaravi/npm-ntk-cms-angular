import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { LangChangeEvent, MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateModuleConfig, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CmsMissingTranslationHandler } from './cmsMissingTranslationHandler';
import { CmsTranslationService } from './cmsTranslation.service';
// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
  imports: [CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CmsMissingTranslationHandler,
      },
    }),],
  exports: [TranslateModule],
  providers: [CmsTranslationService, CmsMissingTranslationHandler],
})
export class CmsTranslateModule {
  /**
* === README ========================================================================
* This block is not needed if you use `isolate: false`. But with `isolate: false` you
* cannot read the lazy-specific translations, even if you set `extend: true`.
*
* PROBLEM: I can't have a configuration that allows reading translations from parent
* non-lazy modules at the same time I read the lazy loaded module files.
*
*   To make a child module extend translations from parent modules use `extend: true`.
*   This will cause the service to also use translations from its parent module.
*
*   You can also isolate the service by using `isolate: true`. In which case the service
*   is a completely isolated instance (for translations, current lang, events, ...).
*   Otherwise, by default, it will share its data with other instances of the service
*   (but you can still use a different loader/compiler/parser/handler even if you don't
*   isolate the service).
* ====================================================================================
* */
  constructor(public translationService: TranslateService) {
    const currentLang = this.translationService.currentLang;
    try {
      firstValueFrom(translationService.use(currentLang));
    } catch (err) {
      //      if (environment.consoleLog)
      console.log(err);
    }
    this.translationService.currentLang = '';
    this.translationService.store.onLangChange.subscribe(
      (lang: LangChangeEvent) => {
        translationService.setDefaultLang(lang.lang);
        if (environment.consoleLog)
          console.log(' ==> LazyLoadedModule ', lang);
        try {
          firstValueFrom(translationService.use(lang.lang));
        } catch (err) {
          if (environment.consoleLog)
            console.log(err);
        }
      }
    );

  }
  static forRoot(): ModuleWithProviders<CmsTranslateModule> {
    // Forcing the whole app to use the returned providers from the AppModule only.
    return {
      ngModule: CmsTranslateModule,
      providers: [
        TranslateService
        /* All of your services here. It will hold the services needed by itself`. */
      ],
    };
  }

  /**
    * Use this method in your root module to provide the TranslateService
    */
  // static forRoot(config: TranslateModuleConfig = {}): ModuleWithProviders<TranslateModule> {
  //   return {
  //     ngModule: TranslateModule,
  //     providers: [
  //       ...defaultProviders(
  //         {
  //           compiler: provideTranslateCompiler(TranslateNoOpCompiler),
  //           parser: provideTranslateParser(TranslateDefaultParser),
  //           loader: provideTranslateLoader(TranslateNoOpLoader),
  //           missingTranslationHandler: provideMissingTranslationHandler(
  //             DefaultMissingTranslationHandler,
  //           ),
  //           ...config,
  //         },
  //         true,
  //       ),
  //     ],
  //   };
  // }

  /**
   * Use this method in your other (non-root) modules to import the directive/pipe
   */
  static forChild(config: TranslateModuleConfig = {}): ModuleWithProviders<CmsTranslateModule> {
    return {
      ngModule: CmsTranslateModule,
      providers: [TranslateService],
    };
  }
}
