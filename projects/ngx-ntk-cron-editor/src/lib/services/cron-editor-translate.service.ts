import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import Utils from '../Utils';
import { ngxTranslatePrefix } from '../pipes/prefix.pipe';
import { en } from '../translations/en';
import { fa } from '../translations/fa';
import { ru } from '../translations/ru';

export interface CronEditorTranslateOptions {
  existent?: CronEditorTranslateOptionExistent[];
  custom?: CronEditorTranslateOptionCustom[];
}

export interface CronEditorTranslateOptionExistent {
  lang: string;
  useExistent: 'ru' | 'en' | 'fa';
  patch?: object;
}

export interface CronEditorTranslateOptionCustom {
  lang: string;
  translations: object;
}

function getPatchedTranslations(translations: object, patch?: object): object {
  return patch == null ? translations : { [ngxTranslatePrefix]: Utils.merge({}, translations[ngxTranslatePrefix], patch) };
}

@Injectable()
export class CronEditorTranslateService {

  constructor(private translate: TranslateService) {
  }

  init(options: CronEditorTranslateOptions) {
    if (options.existent != null) {
      for (const option of options.existent) {
        switch (option.useExistent) {
          case 'en':
            this.translate.setTranslation(option.lang, getPatchedTranslations(en, option.patch));
            break;
          case 'ru':
            this.translate.setTranslation(option.lang, getPatchedTranslations(ru, option.patch));
            break;
          case 'fa':
            this.translate.setTranslation(option.lang, getPatchedTranslations(fa, option.patch));
            break;
        }
      }
    }
    if (options.custom != null) {
      for (const option of options.custom) {
        this.translate.setTranslation(option.lang, { [ngxTranslatePrefix]: option.translations });
      }
    }
  }

}
