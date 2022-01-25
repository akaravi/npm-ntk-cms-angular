import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { NewsContentCategoryModel } from '../../models/entity/news/newsContentCategoryModel';


@Injectable()
export class NewsContentCategoryService extends ApiCmsServerBase<NewsContentCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'NewsContentCategory';
  }

}
