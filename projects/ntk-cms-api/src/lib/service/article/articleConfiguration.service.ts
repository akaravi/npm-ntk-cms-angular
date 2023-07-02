import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import {
  ArticleModuleConfigAdminMainValuesModel,
  ArticleModuleConfigSiteAccessValuesModel,
  ArticleModuleConfigSiteValuesModel,
  ArticleModuleSiteStorageValuesModel
} from '../../models/entity/article/articleConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class ArticleConfigurationService extends
  ApiServerConfigSiteBase<ArticleModuleConfigAdminMainValuesModel,
  ArticleModuleConfigSiteValuesModel,
  ArticleModuleConfigSiteAccessValuesModel,
  ArticleModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'Article';
  }
}
