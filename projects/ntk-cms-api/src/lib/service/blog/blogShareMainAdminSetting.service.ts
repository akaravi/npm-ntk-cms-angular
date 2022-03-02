import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { BlogShareMainAdminSettingModel } from '../../models/entity/blog/blogShareMainAdminSettingModel';



@Injectable()
export class BlogShareMainAdminSettingService extends ApiCmsServerBase<BlogShareMainAdminSettingModel, number>  {
  getModuleControllerUrl(): string {
    return 'BlogShareMainAdminSetting';
  }
}
