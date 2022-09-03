import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberPropertyAliasModel } from '../../models/entity/member/memberPropertyAliasModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberPropertyAliasService extends ApiCmsServerBase<MemberPropertyAliasModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberPropertyAlias';
  }
}
