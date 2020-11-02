import { ApiServerConfigSiteBase } from '../_base/apiServerConfigSiteBase.service';


export class NewsConfigurationService extends ApiServerConfigSiteBase  {
  

  getModuleCotrolerUrl(): string {
    return 'NewsConfiguration';
  }
}
