import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

export class CoreConfigurationService extends ApiServerConfigSiteBase  {


  getModuleCotrolerUrl(): string {
    return 'CoreConfiguration';
  }
}
