import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { ArticleShareReceiverCategoryModel } from '../../models/entity/article/articleShareReceiverCategoryModel';



@Injectable()
export class ArticleShareReceiverCategoryService extends ApiCmsServerBase<ArticleShareReceiverCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'ArticleShareReceiverCategory';
  }
}
