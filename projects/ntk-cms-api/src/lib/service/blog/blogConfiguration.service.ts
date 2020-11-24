import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class BlogConfigurationService extends ApiServerConfigSiteBase  {


  getModuleCotrolerUrl(): string {
    return 'BlogConfiguration';
  }
}
