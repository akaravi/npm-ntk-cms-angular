import { Injectable } from '@angular/core';
import {
  SmsModuleConfigAdminMainValuesModel,
  SmsModuleConfigSiteAccessValuesModel,
  SmsModuleConfigSiteValuesModel,
  SmsModuleSiteStorageValuesModel
} from '../../models/entity/sms/smsSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class SmsConfigSiteService extends
  ApiServerConfigSiteBase<SmsModuleConfigAdminMainValuesModel,
  SmsModuleConfigSiteValuesModel,
  SmsModuleConfigSiteAccessValuesModel,
  SmsModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'sms';
  }
}
