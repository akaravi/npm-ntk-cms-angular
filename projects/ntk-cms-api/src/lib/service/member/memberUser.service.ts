import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberUser } from '../../models/entity/member/memberUser';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberUserService extends ApiCmsServerBase<MemberUser, number>  {


  getModuleCotrolerUrl(): string {
    return 'MemberUser';
  }
}
