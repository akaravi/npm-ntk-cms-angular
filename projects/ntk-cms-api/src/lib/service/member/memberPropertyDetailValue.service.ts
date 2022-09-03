import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberPropertyDetailValueModel } from '../../models/entity/member/memberPropertyDetailValueModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberPropertyDetailValueService extends ApiCmsServerBase<MemberPropertyDetailValueModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberPropertyDetailValue';
  }
}
