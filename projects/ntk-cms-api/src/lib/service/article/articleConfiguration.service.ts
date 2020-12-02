import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class ArticleConfigurationService extends ApiServerConfigSiteBase  {


  getModuleCotrolerUrl(): string {
    return 'ArticleConfiguration';
  }
}
