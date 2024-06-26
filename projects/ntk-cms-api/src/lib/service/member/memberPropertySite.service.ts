import { MemberPropertySiteModel } from '../../models/entity/member/memberPropertySiteModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberPropertySiteService extends ApiCmsServerBase<MemberPropertySiteModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'MemberPropertySite';
  }
}
