import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { NewsShareMainAdminSettingModel } from '../../models/entity/news/newsShareMainAdminSettingModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';



@Injectable()
export class NewsShareMainAdminSettingService extends ApiCmsServerBase<NewsShareMainAdminSettingModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'NewsShareMainAdminSetting';
  }
}
