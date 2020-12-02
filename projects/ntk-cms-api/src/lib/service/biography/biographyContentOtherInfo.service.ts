import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BiographyContentOtherInfoModel } from '../../models/entity/biography/biographyContentOtherInfoModel';

import { Injectable } from '@angular/core';


@Injectable()
export class BiographyContentOtherInfoService extends ApiCmsServerBase<BiographyContentOtherInfoModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'BiographyContentOtherInfo';
  }
}
