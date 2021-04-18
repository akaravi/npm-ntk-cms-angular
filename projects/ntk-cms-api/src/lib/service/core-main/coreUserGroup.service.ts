
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreUserGroupModel } from '../../models/entity/core-main/coreUserGroupModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreUserGroupService extends ApiCmsServerBase<CoreUserGroupModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreUserGroup';
  }
}
