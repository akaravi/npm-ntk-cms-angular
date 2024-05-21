import { MemberPropertyDetailModel } from '../../models/entity/member/memberPropertyDetailModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberPropertyDetailService extends ApiCmsServerBase<MemberPropertyDetailModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'MemberPropertyDetail';
  }
}
