import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreConfigurationService extends ApiServerConfigSiteBase  {


  getModuleCotrolerUrl(): string {
    return 'CoreConfiguration';
  }
}
