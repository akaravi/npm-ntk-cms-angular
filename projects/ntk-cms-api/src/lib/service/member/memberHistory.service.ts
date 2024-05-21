import { MemberHistoryModel } from '../../models/entity/member/memberHistoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberHistoryService extends ApiCmsServerBase<MemberHistoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'MemberHistory';
  }
}
