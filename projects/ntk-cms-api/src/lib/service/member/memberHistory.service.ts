import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberHistoryModel } from '../../models/entity/member/memberHistoryModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberHistoryService extends ApiCmsServerBase<MemberHistoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberHistory';
  }
}
