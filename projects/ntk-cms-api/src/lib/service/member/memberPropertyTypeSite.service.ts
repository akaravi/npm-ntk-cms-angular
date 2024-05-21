import { MemberPropertyTypeSiteModel } from '../../models/entity/member/memberPropertyTypeSiteModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberPropertyTypeSiteService extends ApiCmsServerBase<MemberPropertyTypeSiteModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'MemberPropertyTypeSite';
  }
}
