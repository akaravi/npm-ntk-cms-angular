import { Injectable } from '@angular/core';
import {
  BlogModuleConfigAdminMainValuesModel,
  BlogModuleConfigSiteAccessValuesModel,
  BlogModuleConfigSiteValuesModel,
  BlogModuleSiteStorageValuesModel
} from '../../models/entity/blog/blogConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable({
  providedIn: 'root',
})
export class BlogConfigurationService extends
  ApiServerConfigSiteBase<BlogModuleConfigAdminMainValuesModel,
  BlogModuleConfigSiteValuesModel,
  BlogModuleConfigSiteAccessValuesModel,
  BlogModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'Blog';
  }
}
