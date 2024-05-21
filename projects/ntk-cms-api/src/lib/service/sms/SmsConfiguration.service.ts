import { Injectable } from '@angular/core';
import {
  SmsModuleConfigAdminMainValuesModel,
  SmsModuleConfigSiteAccessValuesModel,
  SmsModuleConfigSiteValuesModel,
  SmsModuleSiteStorageValuesModel
} from '../../models/entity/sms/smsConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class SmsConfigurationService extends
  ApiServerConfigSiteBase<SmsModuleConfigAdminMainValuesModel,
    SmsModuleConfigSiteValuesModel,
    SmsModuleConfigSiteAccessValuesModel,
    SmsModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'sms';
  }
}
