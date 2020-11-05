import { ApplicationLayoutValueModel } from '../../models/entity/application/ApplicationLayoutValueModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';



export class ApplicationLayoutValueService extends ApiCmsServerBase<ApplicationLayoutValueModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ApplicationLayoutValue';
  }
}
