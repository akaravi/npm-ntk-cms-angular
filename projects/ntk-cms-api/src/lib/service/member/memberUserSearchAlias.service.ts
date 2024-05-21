import { MemberUserSearchAliasModel } from '../../models/entity/member/memberUserSearchAliasModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberUserSearchAliasService extends ApiCmsServerBase<MemberUserSearchAliasModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'MemberUserSearchAlias';
  }
}
