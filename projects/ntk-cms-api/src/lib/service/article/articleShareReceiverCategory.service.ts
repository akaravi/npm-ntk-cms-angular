import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ArticleShareReceiverCategoryModel } from '../../models/entity/article/articleShareReceiverCategoryModel';



@Injectable()
export class ArticleShareReceiverCategoryService extends ApiCmsServerBase<ArticleShareReceiverCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ArticleShareReceiverCategory';
  }
}
