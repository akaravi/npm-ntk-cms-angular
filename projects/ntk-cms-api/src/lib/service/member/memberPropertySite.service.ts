import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberPropertySiteModel } from '../../models/entity/member/memberPropertySiteModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberPropertySiteService extends ApiCmsServerBase<MemberPropertySiteModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberPropertySite';
  }
}
