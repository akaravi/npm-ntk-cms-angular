import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { BlogShareReceiverCategoryModel } from 'dist/ntk-cms-api/fesm2015/ntk-cms-api';


@Injectable()
export class BlogShareReceiverCategoryService extends ApiCmsServerBase<BlogShareReceiverCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'BlogShareReceiverCategory';
  }
}
