import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberUserSiteModel } from '../../models/entity/member/memberUserSiteModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberUserSiteService extends ApiCmsServerBase<MemberUserSiteModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberUserSite';
  }
}
