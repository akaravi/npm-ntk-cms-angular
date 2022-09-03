import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { MemberPropertyTypeModel } from '../../models/entity/member/memberPropertyTypeModel';

import { Injectable } from '@angular/core';


@Injectable()
export class MemberPropertyTypeService extends ApiCmsServerBase<MemberPropertyTypeModel, number>  {
  getModuleControllerUrl(): string {
    return 'MemberPropertyType';
  }
}
