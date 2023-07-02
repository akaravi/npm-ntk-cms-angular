import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import {
  MemberModuleConfigAdminMainValuesModel,
  MemberModuleConfigSiteAccessValuesModel,
  MemberModuleConfigSiteValuesModel,
  MemberModuleSiteStorageValuesModel
} from '../../models/entity/member/memberConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class MemberConfigurationService extends
  ApiServerConfigSiteBase<MemberModuleConfigAdminMainValuesModel,
  MemberModuleConfigSiteValuesModel,
  MemberModuleConfigSiteAccessValuesModel,
  MemberModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'member';
  }
}
