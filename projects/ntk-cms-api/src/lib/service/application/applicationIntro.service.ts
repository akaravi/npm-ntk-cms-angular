import { ApplicationIntroModel } from '../../models/entity/application/ApplicationIntroModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';



export class ApplicationIntroService extends ApiCmsServerBase<ApplicationIntroModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ApplicationIntro';
  }
}
