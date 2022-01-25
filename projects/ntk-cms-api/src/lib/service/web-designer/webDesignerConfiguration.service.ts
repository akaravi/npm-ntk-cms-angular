import { Injectable } from '@angular/core';
import {
  WebDesignerModuleConfigAdminMainValuesModel,
  WebDesignerModuleConfigSiteAccessValuesModel,
  WebDesignerModuleConfigSiteValuesModel,
  WebDesignerModuleSiteStorageValuesModel
} from '../../models/entity/web-designer/webDesignerConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class WebDesignerConfigurationService extends
  ApiServerConfigSiteBase<WebDesignerModuleConfigAdminMainValuesModel,
  WebDesignerModuleConfigSiteValuesModel,
  WebDesignerModuleConfigSiteAccessValuesModel,
  WebDesignerModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'webDesigner';
  }
}
