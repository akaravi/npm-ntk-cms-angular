import { MemberUserSiteModel } from '../../models/entity/member/memberUserSiteModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberUserSiteService extends ApiCmsServerBase<MemberUserSiteModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'MemberUserSite';
  }
}
