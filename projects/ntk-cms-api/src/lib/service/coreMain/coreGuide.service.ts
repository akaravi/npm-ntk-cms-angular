import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreGuideModel } from '../../models/entity/coreMain/coreGuideModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreGuideService extends ApiCmsServerBase<CoreGuideModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreGuide';
  }
}
