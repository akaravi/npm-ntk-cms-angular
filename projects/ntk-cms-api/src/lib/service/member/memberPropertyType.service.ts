import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberPropertyTypeModel } from '../../models/entity/member/memberPropertyTypeModel';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class MemberPropertyTypeService extends ApiCmsServerBase<MemberPropertyTypeModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'MemberPropertyType';
  }
}
