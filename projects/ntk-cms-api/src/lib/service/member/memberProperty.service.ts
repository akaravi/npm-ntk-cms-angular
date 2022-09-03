import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberPropertyModel } from '../../models/entity/member/memberPropertyModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberPropertyService extends ApiCmsServerBase<MemberPropertyModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberProperty';
  }
}
