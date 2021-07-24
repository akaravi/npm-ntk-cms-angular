import { Injectable } from '@angular/core';
import {
  MemberModuleConfigAdminMainValuesModel,
  MemberModuleConfigSiteAccessValuesModel,
  MemberModuleConfigSiteValuesModel,
  MemberModuleSiteStorageValuesModel
} from '../../models/entity/member/memberConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable({
  providedIn: 'root',
})
export class MemberConfigurationService extends
  ApiServerConfigSiteBase<MemberModuleConfigAdminMainValuesModel,
  MemberModuleConfigSiteValuesModel,
  MemberModuleConfigSiteAccessValuesModel,
  MemberModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'member';
  }
}
