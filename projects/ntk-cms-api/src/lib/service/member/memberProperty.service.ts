import { MemberPropertyModel } from '../../models/entity/member/memberPropertyModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberPropertyService extends ApiCmsServerBase<MemberPropertyModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'MemberProperty';
  }
}
