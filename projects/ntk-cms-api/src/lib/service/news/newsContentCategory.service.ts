import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { NewsContentCategoryModel } from '../../models/entity/news/newsContentCategoryModel';


@Injectable()
export class NewsContentCategoryService extends ApiCmsServerBase<NewsContentCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'NewsContentCategory';
  }

}
