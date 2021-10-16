import { Injectable } from '@angular/core';
import {
  ChartModuleConfigAdminMainValuesModel,
  ChartModuleConfigSiteAccessValuesModel,
  ChartModuleConfigSiteValuesModel,
  ChartModuleSiteStorageValuesModel
} from '../../models/entity/chart/chartConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class ChartConfigurationService extends
  ApiServerConfigSiteBase<ChartModuleConfigAdminMainValuesModel,
  ChartModuleConfigSiteValuesModel,
  ChartModuleConfigSiteAccessValuesModel,
  ChartModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'chart';
  }
}
