import { ApiServerConfigSiteBase } from '../_base/apiServerConfigSiteBase.service';

export class CoreConfigurationService extends ApiServerConfigSiteBase  {
  

  getModuleCotrolerUrl(): string {
    return 'CoreConfiguration';
  }
}
