import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberPropertyDetailGroupModel } from '../../models/entity/member/memberPropertyDetailGroupModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberPropertyDetailGroupService extends ApiCmsServerBase<MemberPropertyDetailGroupModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberPropertyDetailGroup';
  }
}
