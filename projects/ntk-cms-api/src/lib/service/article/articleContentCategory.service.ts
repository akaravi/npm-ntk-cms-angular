import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ArticleContentCategoryModel } from '../../models/entity/article/articleContentCategoryModel';


@Injectable()
export class ArticleContentCategoryService extends ApiCmsServerBase<ArticleContentCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ArticleContentCategory';
  }

}
