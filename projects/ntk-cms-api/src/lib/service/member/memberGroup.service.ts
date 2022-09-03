import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberGroupModel } from '../../models/entity/member/memberGroupModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberGroupService extends ApiCmsServerBase<MemberGroupModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberGroup';
  }
}
