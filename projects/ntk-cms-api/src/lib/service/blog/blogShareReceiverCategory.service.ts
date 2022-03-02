import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { BlogShareReceiverCategoryModel } from '../../models/entity/blog/blogShareReceiverCategoryModel';



@Injectable()
export class BlogShareReceiverCategoryService extends ApiCmsServerBase<BlogShareReceiverCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'BlogShareReceiverCategory';
  }
}
