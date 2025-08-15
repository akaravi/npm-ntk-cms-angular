import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TranslateUiService {
  private availableLanguages = ['en', 'fa', 'ru'];
  private translationPath = './assets/i18n/ngx-ntk-cron-editor/';

  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) {}

  public init(language: string = null): void {
    if (language) {
      // Initialize one specific language
      this.loadTranslation(language).subscribe(
        (translations) => {
          this.translateService.setTranslation(language, translations, true);
          this.translateService.use(language);
        },
        (error) => {
          console.warn(
            `Failed to load translation for ${language}, falling back to English`
          );
          this.loadTranslation('en').subscribe((enTranslations) => {
            this.translateService.setTranslation(
              language,
              enTranslations,
              true
            );
            this.translateService.use(language);
          });
        }
      );
    } else {
      // Initialize all languages
      const loadPromises = this.availableLanguages.map((lang) =>
        this.loadTranslation(lang).pipe(
          catchError((error) => {
            console.warn(`Failed to load translation for ${lang}`);
            return of(null);
          })
        )
      );

      forkJoin(loadPromises).subscribe((results) => {
        results.forEach((translations, index) => {
          if (translations) {
            const lang = this.availableLanguages[index];
            this.translateService.setTranslation(lang, translations, true);
          }
        });
      });
    }
  }

  private loadTranslation(language: string): Observable<any> {
    return this.http.get(`${this.translationPath}${language}.json`);
  }

  public setLanguage(language: string): void {
    this.translateService.use(language);
  }

  public getCurrentLanguage(): string {
    return this.translateService.currentLang;
  }

  public getAvailableLanguages(): string[] {
    return this.availableLanguages;
  }
}
