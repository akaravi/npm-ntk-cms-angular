import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberUserSearchAliasModel } from '../../models/entity/member/memberUserSearchAliasModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberUserSearchAliasService extends ApiCmsServerBase<MemberUserSearchAliasModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberUserSearchAlias';
  }
}
