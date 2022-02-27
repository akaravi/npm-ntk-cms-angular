import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { ArticleShareReceiverCategoryModel } from 'dist/ntk-cms-api/fesm2015/ntk-cms-api';


@Injectable()
export class ArticleShareReceiverCategoryService extends ApiCmsServerBase<ArticleShareReceiverCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'ArticleShareReceiverCategory';
  }
}
