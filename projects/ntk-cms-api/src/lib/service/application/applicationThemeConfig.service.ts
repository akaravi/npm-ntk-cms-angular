import { ApplicationThemeConfigModel } from '../../models/entity/application/ApplicationThemeConfigModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';



export class ApplicationThemeConfigService extends ApiCmsServerBase<ApplicationThemeConfigModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ApplicationThemeConfig';
  }
}
