import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { NewsShareReceiverCategoryModel } from 'dist/ntk-cms-api/fesm2015/ntk-cms-api';


@Injectable()
export class NewsShareReceiverCategoryService extends ApiCmsServerBase<NewsShareReceiverCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'NewsShareReceiverCategory';
  }
}
