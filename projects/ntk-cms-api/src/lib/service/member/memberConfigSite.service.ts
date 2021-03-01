import { Injectable } from '@angular/core';
import {
  MemberModuleConfigAdminMainValuesModel,
  MemberModuleConfigSiteAccessValuesModel,
  MemberModuleConfigSiteValuesModel,
  MemberModuleSiteStorageValuesModel
} from '../../models/entity/member/memberSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class MemberConfigSiteService extends
  ApiServerConfigSiteBase<MemberModuleConfigAdminMainValuesModel,
  MemberModuleConfigSiteValuesModel,
  MemberModuleConfigSiteAccessValuesModel,
  MemberModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'member';
  }
}
