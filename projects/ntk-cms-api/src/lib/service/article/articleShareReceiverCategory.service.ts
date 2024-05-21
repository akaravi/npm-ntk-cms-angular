import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { ArticleShareReceiverCategoryModel } from '../../models/entity/article/articleShareReceiverCategoryModel';
import { FilterModel } from '../../models/entity/base/filterModel';



@Injectable()
export class ArticleShareReceiverCategoryService extends ApiCmsServerBase<ArticleShareReceiverCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ArticleShareReceiverCategory';
  }
}
