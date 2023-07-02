import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { NewsShareReceiverCategoryModel } from '../../models/entity/news/newsShareReceiverCategoryModel';



@Injectable()
export class NewsShareReceiverCategoryService extends ApiCmsServerBase<NewsShareReceiverCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'NewsShareReceiverCategory';
  }
}
