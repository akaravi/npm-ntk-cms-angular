import { Injectable } from '@angular/core';
import {
  ArticleModuleConfigAdminMainValuesModel,
  ArticleModuleConfigSiteAccessValuesModel,
  ArticleModuleConfigSiteValuesModel,
  ArticleModuleSiteStorageValuesModel
} from '../../models/entity/article/articleSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class ArticleConfigSiteService extends
  ApiServerConfigSiteBase<ArticleModuleConfigAdminMainValuesModel,
  ArticleModuleConfigSiteValuesModel,
  ArticleModuleConfigSiteAccessValuesModel,
  ArticleModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'Article';
  }
}
