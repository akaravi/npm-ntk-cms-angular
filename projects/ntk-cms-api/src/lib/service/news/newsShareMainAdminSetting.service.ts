import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { NewsShareMainAdminSettingModel } from '../../models/entity/news/newsShareMainAdminSettingModel';



@Injectable()
export class NewsShareMainAdminSettingService extends ApiCmsServerBase<NewsShareMainAdminSettingModel, number>  {
  getModuleControllerUrl(): string {
    return 'NewsShareMainAdminSetting';
  }
}
