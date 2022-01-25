import { Injectable } from '@angular/core';
import {
  ApiTelegramModuleConfigAdminMainValuesModel,
  ApiTelegramModuleConfigSiteAccessValuesModel,
  ApiTelegramModuleConfigSiteValuesModel,
  ApiTelegramModuleSiteStorageValuesModel
} from '../../models/entity/api-telegram/apiTelegramConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class ApiTelegramConfigurationService extends
  ApiServerConfigSiteBase<ApiTelegramModuleConfigAdminMainValuesModel,
  ApiTelegramModuleConfigSiteValuesModel,
  ApiTelegramModuleConfigSiteAccessValuesModel,
  ApiTelegramModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'ApiTelegram';
  }
}
