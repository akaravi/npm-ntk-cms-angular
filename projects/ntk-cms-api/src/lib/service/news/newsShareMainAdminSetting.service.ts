import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { NewsShareMainAdminSettingModel } from 'dist/ntk-cms-api/fesm2015/ntk-cms-api';


@Injectable()
export class NewsShareMainAdminSettingService extends ApiCmsServerBase<NewsShareMainAdminSettingModel, number>  {
  getModuleControllerUrl(): string {
    return 'NewsShareMainAdminSetting';
  }
}
