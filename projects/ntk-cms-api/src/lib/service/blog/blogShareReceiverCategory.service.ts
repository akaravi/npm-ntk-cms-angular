import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { BlogShareReceiverCategoryModel } from '../../models/entity/blog/blogShareReceiverCategoryModel';



@Injectable()
export class BlogShareReceiverCategoryService extends ApiCmsServerBase<BlogShareReceiverCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'BlogShareReceiverCategory';
  }
}
