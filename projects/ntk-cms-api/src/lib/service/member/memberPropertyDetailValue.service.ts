import { MemberPropertyDetailValueModel } from '../../models/entity/member/memberPropertyDetailValueModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberPropertyDetailValueService extends ApiCmsServerBase<MemberPropertyDetailValueModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'MemberPropertyDetailValue';
  }
}
