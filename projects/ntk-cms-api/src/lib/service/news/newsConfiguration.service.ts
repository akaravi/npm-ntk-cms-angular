import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';


export class NewsConfigurationService extends ApiServerConfigSiteBase  {


  getModuleCotrolerUrl(): string {
    return 'NewsConfiguration';
  }
}
