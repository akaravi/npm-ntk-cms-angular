import { Injectable } from '@angular/core';
import {
  HyperShopModuleConfigAdminMainValuesModel,
  HyperShopModuleConfigSiteAccessValuesModel,
  HyperShopModuleConfigSiteValuesModel,
  HyperShopModuleSiteStorageValuesModel
} from '../../models/entity/hyper-shop/hyperShopConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class HyperShopConfigurationService extends
  ApiServerConfigSiteBase<HyperShopModuleConfigAdminMainValuesModel,
  HyperShopModuleConfigSiteValuesModel,
  HyperShopModuleConfigSiteAccessValuesModel,
  HyperShopModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'HyperShop';
  }
}
