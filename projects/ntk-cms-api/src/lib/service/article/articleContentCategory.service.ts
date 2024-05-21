import { Injectable } from '@angular/core';
import { ArticleContentCategoryModel } from '../../models/entity/article/articleContentCategoryModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ArticleContentCategoryService extends ApiCmsServerBase<ArticleContentCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ArticleContentCategory';
  }

}
