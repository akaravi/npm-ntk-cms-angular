import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberUserModel } from '../../models/entity/member/memberUserModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberUserService extends ApiCmsServerBase<MemberUserModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberUser';
  }
}
