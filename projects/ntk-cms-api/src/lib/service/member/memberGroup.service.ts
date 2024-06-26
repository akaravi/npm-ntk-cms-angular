import { MemberGroupModel } from '../../models/entity/member/memberGroupModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberGroupService extends ApiCmsServerBase<MemberGroupModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'MemberGroup';
  }
}
