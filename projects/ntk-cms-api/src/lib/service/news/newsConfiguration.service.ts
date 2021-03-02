import { Injectable } from '@angular/core';
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
  getModuleCotrolerUrl(): string {
    return 'news';
  }
}
