import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';
import { Injectable } from '@angular/core';
import {
  CoreModuleConfigAdminMainValuesModel,
  CoreModuleConfigSiteAccessValuesModel,
  CoreModuleConfigSiteValuesModel,
  CoreModuleSiteStorageValuesModel
} from '../../models/entity/core-main/coreConfigurationModel';


@Injectable()
export class CoreConfigurationService extends
  ApiServerConfigSiteBase<CoreModuleConfigAdminMainValuesModel,
  CoreModuleConfigSiteValuesModel,
  CoreModuleConfigSiteAccessValuesModel,
  CoreModuleSiteStorageValuesModel>   {


  getModuleCotrolerUrl(): string {
    return 'Core';
  }
}
