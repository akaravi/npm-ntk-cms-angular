import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberPropertyTypeSiteModel } from '../../models/entity/member/memberPropertyTypeSiteModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberPropertyTypeSiteService extends ApiCmsServerBase<MemberPropertyTypeSiteModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberPropertyTypeSite';
  }
}
