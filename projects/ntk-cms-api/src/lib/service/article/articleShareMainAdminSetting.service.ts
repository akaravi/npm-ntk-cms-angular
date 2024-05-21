import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { ArticleShareMainAdminSettingModel } from '../../models/entity/article/articleShareMainAdminSettingModel';
import { FilterModel } from '../../models/entity/base/filterModel';



@Injectable()
export class ArticleShareMainAdminSettingService extends ApiCmsServerBase<ArticleShareMainAdminSettingModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ArticleShareMainAdminSetting';
  }
}
