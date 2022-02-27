import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { BiographyShareMainAdminSettingModel } from 'dist/ntk-cms-api/fesm2015/ntk-cms-api';


@Injectable()
export class BiographyShareMainAdminSettingService extends ApiCmsServerBase<BiographyShareMainAdminSettingModel, number>  {
  getModuleControllerUrl(): string {
    return 'BiographyShareMainAdminSetting';
  }
}
