// Localization is based on '@ngx-translate/core';
// Please be familiar with official documentations first => https://github.com/ngx-translate/core

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

const LOCALIZATION_LOCAL_STORAGE_KEY = 'language';
export interface Locale {
  lang: string;
  data: any;
}



// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class CmsTranslationService {
  // Private properties
  private langIds: any = [];
  constructor(public translate: TranslateService) {
    translate.addLangs(environment.languages.map((x) => x.lang));
    //translate.addLangs([this.getSelectedLanguage]);
    translate.setDefaultLang(this.getSelectedLanguage);
  }
  loadTranslations(...args: Locale[]): void {
    const locales = [...args];
    locales.forEach((locale) => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);
      this.langIds.push(locale.lang);
    });

    // add new languages to the list
    this.translate.addLangs(this.langIds);
    firstValueFrom(this.translate.use(this.getSelectedLanguage));//در قالب جدید از روی قالب جدید اضافه کردم
  }

  setLanguage(lang: string): string {
    if (lang?.length > 0 && lang != this.getSelectedLanguage) {
      firstValueFrom(this.translate.use(lang));
      localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
      return lang;
    }
    return this.getSelectedLanguage
  }

  /**
   * Returns selected language
   */
  get getSelectedLanguage(): string {
    const browserLang = this.translate.getBrowserLang();
    return localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) || this.translate.getDefaultLang() || environment.languagesDefault || browserLang || "en";
  }

}

