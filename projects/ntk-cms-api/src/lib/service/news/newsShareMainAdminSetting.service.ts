import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { NewsShareMainAdminSettingModel } from '../../models/entity/news/newsShareMainAdminSettingModel';



@Injectable()
export class NewsShareMainAdminSettingService extends ApiCmsServerBase<NewsShareMainAdminSettingModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'NewsShareMainAdminSetting';
  }
}
