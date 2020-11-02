import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';


export class NewsShareMainAdminSettingService extends ApiCmsServerBase<any, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'NewsShareMainAdminSetting';
  }
}
