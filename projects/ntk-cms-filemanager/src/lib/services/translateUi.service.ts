import {fr} from '../translations/fr';
import {en} from '../translations/en';
import {fa} from '../translations/fa';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslateUiService {
    private availableLanguages = { en, fr,fa };

    constructor(private translateService: TranslateService) {
    }

    public init(language: string = null): any {
        if (language) {
            //initialize one specific language
            this.translateService.setTranslation(language, this.availableLanguages[language], true);
        } else {
            //initialize all
            Object.keys(this.availableLanguages).forEach((language) => {
                this.translateService.setTranslation(language, this.availableLanguages[language], true);
            });
        }
    }
}