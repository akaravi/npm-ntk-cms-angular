import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {ru} from '../translations/ru';
import {en} from '../translations/en';
import {fa} from '../translations/fa';
//import {ngxTranslatePrefix} from '../pipes/prefix.pipe';
import Utils from '../poco/Utils';
//import Utils from '../Utils';
export const ngxTranslatePrefix='CRON';
export interface CronEditorTranslateOptions {
  existent?: CronEditorTranslateOptionExistent[];
  custom?: CronEditorTranslateOptionCustom[];
}

export interface CronEditorTranslateOptionExistent {
  lang: string;
  useExistent: 'fa' | 'ru' | 'en';
  patch?: object;
}

export interface CronEditorTranslateOptionCustom {
  lang: string;
  translations: object;
}

function getPatchedTranslations(translations: object, patch?: object): object {
  //return patch == null ? translations : {[ngxTranslatePrefix]: Utils.merge({}, translations[ngxTranslatePrefix], patch)};
  return patch == null ? translations : {[ngxTranslatePrefix]: Utils.merge({}, translations[ngxTranslatePrefix], patch)};
}

@Injectable()
export class CronEditorTranslateService {

  constructor(private translate: TranslateService) {
  }

  init(options: CronEditorTranslateOptions) {
    if (options.existent != null) {
      for (const option of options.existent) {
        //console.log('option.useExistent',option.useExistent);
        switch (option.useExistent) {
          case 'fa':
            this.translate.setTranslation(option.lang, getPatchedTranslations(fa, option.patch));
            break;
          case 'en':
            this.translate.setTranslation(option.lang, getPatchedTranslations(en, option.patch));
            break;
          case 'ru':
            this.translate.setTranslation(option.lang, getPatchedTranslations(ru, option.patch));
            break;
        }
      }
    }
    if (options.custom != null) {
      for (const option of options.custom) {
        this.translate.setTranslation(option.lang, {[ngxTranslatePrefix]: option.translations});
      }
    }
  }

}
