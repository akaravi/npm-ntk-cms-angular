import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberPropertyDetailGroupModel } from '../../models/entity/member/memberPropertyDetailGroupModel';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberPropertyDetailGroupService extends ApiCmsServerBase<MemberPropertyDetailGroupModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'MemberPropertyDetailGroup';
  }
}
