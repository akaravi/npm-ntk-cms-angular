import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class NewsConfigurationService extends ApiServerConfigSiteBase  {


  getModuleCotrolerUrl(): string {
    return 'NewsConfiguration';
  }
}
