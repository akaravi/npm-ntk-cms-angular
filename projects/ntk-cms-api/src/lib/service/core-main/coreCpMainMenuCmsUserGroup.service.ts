import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreCpMainMenuCmsUserGroupModel } from '../../models/entity/core-main/coreCpMainMenuCmsUserGroupModel';


@Injectable({
  providedIn: 'root',
})
export class CoreCpMainMenuCmsUserGroupService extends ApiCmsServerBase<CoreCpMainMenuCmsUserGroupModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'CoreCpMainMenuCmsUserGroup';
  }
}
