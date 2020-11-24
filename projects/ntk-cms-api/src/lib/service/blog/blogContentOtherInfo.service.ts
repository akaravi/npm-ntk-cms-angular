import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BlogContentOtherInfoModel } from '../../models/entity/blog/blogContentOtherInfoModel';

import { Injectable } from '@angular/core';


@Injectable()
export class BlogContentOtherInfoService extends ApiCmsServerBase<BlogContentOtherInfoModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'BlogContentOtherInfo';
  }
}
