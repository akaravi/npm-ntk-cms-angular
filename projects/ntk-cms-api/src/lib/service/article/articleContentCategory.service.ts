import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { ArticleContentCategoryModel } from '../../models/entity/article/articleContentCategoryModel';


@Injectable()
export class ArticleContentCategoryService extends ApiCmsServerBase<ArticleContentCategoryModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ArticleContentCategory';
  }

}
