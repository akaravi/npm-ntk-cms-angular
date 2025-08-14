import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MAT_COLOR_FORMATS } from 'ngx-ntk-mat-color-picker';
import { NtkSmartModalModule } from 'ngx-ntk-smart-module';
import { routes } from './app.routes';
import { CmsTranslateModule } from './i18n';

// Required for AOT compilation
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    importProvidersFrom(CmsTranslateModule.forRoot()),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    importProvidersFrom(HttpClientModule), // or provideHttpClient() in Angular v15
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      })
    ),
    importProvidersFrom(NtkSmartModalModule.forRoot()),
    importProvidersFrom(FontAwesomeModule),
    importProvidersFrom(MatCardModule),
    importProvidersFrom(MatFormFieldModule),
    importProvidersFrom(MatInputModule),
    importProvidersFrom(MatRadioModule),
    importProvidersFrom(MatSelectModule),
    importProvidersFrom(MatIconModule),
    {
      provide: FaIconLibrary,
      useFactory: () => {
        const library = new FaIconLibrary();
        library.addIconPacks(fas);
        return library;
      },
    },
    {
      provide: MAT_COLOR_FORMATS,
      useValue: {
        display: {
          colorInput: 'hex',
          colorPicker: 'hex',
        },
      },
    },
  ],
};
