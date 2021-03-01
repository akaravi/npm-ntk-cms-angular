import { Injectable } from '@angular/core';
import {
  BlogModuleConfigAdminMainValuesModel,
  BlogModuleConfigSiteAccessValuesModel,
  BlogModuleConfigSiteValuesModel,
  BlogModuleSiteStorageValuesModel
} from '../../models/entity/blog/blogSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class BlogConfigSiteService extends
  ApiServerConfigSiteBase<BlogModuleConfigAdminMainValuesModel,
  BlogModuleConfigSiteValuesModel,
  BlogModuleConfigSiteAccessValuesModel,
  BlogModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'Blog';
  }
}
