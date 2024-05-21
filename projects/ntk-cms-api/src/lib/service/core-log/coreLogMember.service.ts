
import { CoreLogMemberModel } from '../../models/entity/core-log/coreLogMemberModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreLogMemberService extends ApiCmsServerBase<CoreLogMemberModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreLogMember';
  }
}
