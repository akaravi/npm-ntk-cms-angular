import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class BiographyConfigurationService extends ApiServerConfigSiteBase  {


  getModuleCotrolerUrl(): string {
    return 'BiographyConfiguration';
  }
}
