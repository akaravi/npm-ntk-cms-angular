import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslateUiService {
  private availableLanguages = ['en', 'fa', 'fr', 'ru'];

  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) {}

  public init(language: string = null): void {
    if (language) {
      // Initialize one specific language
      this.loadTranslation(language);
    } else {
      // Initialize all languages
      this.availableLanguages.forEach((lang) => {
        this.loadTranslation(lang);
      });
    }
  }

  private loadTranslation(language: string): void {
    const translationPath = `./assets/i18n/ntk-cms-filemanager/${language}.json`;

    this.http.get(translationPath).subscribe(
      (translation: any) => {
        this.translateService.setTranslation(language, translation, true);
        console.log(`Translation loaded for language: ${language}`);
      },
      (error) => {
        console.error(
          `Failed to load translation for language: ${language}`,
          error
        );
        // Fallback to English if translation fails
        if (language !== 'en') {
          this.loadTranslation('en');
        }
      }
    );
  }

  public setLanguage(language: string): void {
    if (this.availableLanguages.includes(language)) {
      this.translateService.use(language);
    } else {
      console.warn(
        `Language ${language} is not supported. Falling back to English.`
      );
      this.translateService.use('en');
    }
  }

  public getCurrentLanguage(): string {
    return this.translateService.currentLang || 'en';
  }

  public getAvailableLanguages(): string[] {
    return this.availableLanguages;
  }
}
