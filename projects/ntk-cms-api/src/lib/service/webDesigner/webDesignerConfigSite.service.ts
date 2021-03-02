import { Injectable } from '@angular/core';
import {
  WebDesignerModuleConfigAdminMainValuesModel,
  WebDesignerModuleConfigSiteAccessValuesModel,
  WebDesignerModuleConfigSiteValuesModel,
  WebDesignerModuleSiteStorageValuesModel
} from '../../models/entity/webDesigner/webDesignerSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class WebDesignerConfigSiteService extends
  ApiServerConfigSiteBase<WebDesignerModuleConfigAdminMainValuesModel,
  WebDesignerModuleConfigSiteValuesModel,
  WebDesignerModuleConfigSiteAccessValuesModel,
  WebDesignerModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'webDesigner';
  }
}
