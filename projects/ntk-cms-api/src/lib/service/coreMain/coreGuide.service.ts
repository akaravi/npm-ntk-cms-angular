import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreGuideModel } from '../../models/entity/coreMain/coreGuideModel';

export class CoreGuideService extends ApiCmsServerBase<CoreGuideModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreGuide';
  }
}
