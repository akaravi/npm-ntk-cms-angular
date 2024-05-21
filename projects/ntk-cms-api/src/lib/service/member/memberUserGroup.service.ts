import { MemberUserGroupModel } from '../../models/entity/member/memberUserGroupModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberUserGroupService extends ApiCmsServerBase<MemberUserGroupModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'MemberUserGroup';
  }
}
