import { Injectable } from '@angular/core';
import {
  HyperShopModuleConfigAdminMainValuesModel,
  HyperShopModuleConfigSiteAccessValuesModel,
  HyperShopModuleConfigSiteValuesModel,
  HyperShopModuleSiteStorageValuesModel
} from '../../models/entity/hyperShop/hyperShopSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class HyperShopConfigSiteService extends
  ApiServerConfigSiteBase<HyperShopModuleConfigAdminMainValuesModel,
  HyperShopModuleConfigSiteValuesModel,
  HyperShopModuleConfigSiteAccessValuesModel,
  HyperShopModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'HyperShop';
  }
}
