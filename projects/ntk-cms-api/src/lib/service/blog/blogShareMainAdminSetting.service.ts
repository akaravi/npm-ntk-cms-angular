import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { BlogShareMainAdminSettingModel } from 'dist/ntk-cms-api/fesm2015/ntk-cms-api';


@Injectable()
export class BlogShareMainAdminSettingService extends ApiCmsServerBase<BlogShareMainAdminSettingModel, number>  {
  getModuleControllerUrl(): string {
    return 'BlogShareMainAdminSetting';
  }
}
