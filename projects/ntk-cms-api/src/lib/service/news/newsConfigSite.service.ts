import { Injectable } from '@angular/core';
import {
  NewsModuleConfigAdminMainValuesModel,
  NewsModuleConfigSiteAccessValuesModel,
  NewsModuleConfigSiteValuesModel,
  NewsModuleSiteStorageValuesModel
} from '../../models/entity/news/newsSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class NewsConfigSiteService extends
  ApiServerConfigSiteBase<NewsModuleConfigAdminMainValuesModel,
  NewsModuleConfigSiteValuesModel,
  NewsModuleConfigSiteAccessValuesModel,
  NewsModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'news';
  }
}
