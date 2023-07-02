import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { BlogShareMainAdminSettingModel } from '../../models/entity/blog/blogShareMainAdminSettingModel';



@Injectable()
export class BlogShareMainAdminSettingService extends ApiCmsServerBase<BlogShareMainAdminSettingModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'BlogShareMainAdminSetting';
  }
}
