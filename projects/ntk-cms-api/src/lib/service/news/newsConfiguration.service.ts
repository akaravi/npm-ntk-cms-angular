import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import {
  NewsModuleConfigAdminMainValuesModel,
  NewsModuleConfigSiteAccessValuesModel,
  NewsModuleConfigSiteValuesModel,
  NewsModuleSiteStorageValuesModel
} from '../../models/entity/news/newsConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class NewsConfigurationService extends
  ApiServerConfigSiteBase<NewsModuleConfigAdminMainValuesModel,
  NewsModuleConfigSiteValuesModel,
  NewsModuleConfigSiteAccessValuesModel,
  NewsModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'news';
  }
}
