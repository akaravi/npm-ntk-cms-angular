
import { CoreLogMemberModel } from '../../models/entity/core-log/coreLogMemberModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreLogMemberService extends ApiCmsServerBase<CoreLogMemberModel, string>  {
  getModuleControllerUrl(): string {
    return 'CoreLogMember';
  }
}
