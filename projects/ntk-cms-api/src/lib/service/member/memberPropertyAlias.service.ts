import { MemberPropertyAliasModel } from '../../models/entity/member/memberPropertyAliasModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberPropertyAliasService extends ApiCmsServerBase<MemberPropertyAliasModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'MemberPropertyAlias';
  }
}
