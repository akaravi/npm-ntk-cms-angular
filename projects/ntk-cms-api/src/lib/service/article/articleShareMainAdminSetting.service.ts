import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { ArticleShareMainAdminSettingModel } from 'dist/ntk-cms-api/fesm2015/ntk-cms-api';


@Injectable()
export class ArticleShareMainAdminSettingService extends ApiCmsServerBase<ArticleShareMainAdminSettingModel, number>  {
  getModuleControllerUrl(): string {
    return 'ArticleShareMainAdminSetting';
  }
}
