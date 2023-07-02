import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import {
  BlogModuleConfigAdminMainValuesModel,
  BlogModuleConfigSiteAccessValuesModel,
  BlogModuleConfigSiteValuesModel,
  BlogModuleSiteStorageValuesModel
} from '../../models/entity/blog/blogConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class BlogConfigurationService extends
  ApiServerConfigSiteBase<BlogModuleConfigAdminMainValuesModel,
  BlogModuleConfigSiteValuesModel,
  BlogModuleConfigSiteAccessValuesModel,
  BlogModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'Blog';
  }
}
