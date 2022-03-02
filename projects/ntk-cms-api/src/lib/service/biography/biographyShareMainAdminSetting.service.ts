import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { BiographyShareMainAdminSettingModel } from '../../models/entity/biography/biographyShareMainAdminSettingModel';



@Injectable()
export class BiographyShareMainAdminSettingService extends ApiCmsServerBase<BiographyShareMainAdminSettingModel, number>  {
  getModuleControllerUrl(): string {
    return 'BiographyShareMainAdminSetting';
  }
}
