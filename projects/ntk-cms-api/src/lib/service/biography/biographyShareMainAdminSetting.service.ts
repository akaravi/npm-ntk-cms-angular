import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { BiographyShareMainAdminSettingModel } from '../../models/entity/biography/biographyShareMainAdminSettingModel';



@Injectable()
export class BiographyShareMainAdminSettingService extends ApiCmsServerBase<BiographyShareMainAdminSettingModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'BiographyShareMainAdminSetting';
  }
}
