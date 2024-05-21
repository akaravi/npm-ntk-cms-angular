import { MemberUserModel } from '../../models/entity/member/memberUserModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberUserService extends ApiCmsServerBase<MemberUserModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'MemberUser';
  }
}
