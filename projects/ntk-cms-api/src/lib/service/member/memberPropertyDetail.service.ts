import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberPropertyDetailModel } from '../../models/entity/member/memberPropertyDetailModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberPropertyDetailService extends ApiCmsServerBase<MemberPropertyDetailModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberPropertyDetail';
  }
}
