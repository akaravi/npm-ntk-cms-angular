import { ApplicationAppModel } from '../../models/entity/application/applicationAppModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';



export class ApplicationAppService extends ApiCmsServerBase<ApplicationAppModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ApplicationApp';
  }
}
