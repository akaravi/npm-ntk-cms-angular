import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


export class NewsShareMainAdminSettingService extends ApiCmsServerBase<any, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsShareMainAdminSetting';
  }
}
