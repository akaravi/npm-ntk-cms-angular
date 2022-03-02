import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { NewsShareReceiverCategoryModel } from '../../models/entity/news/newsShareReceiverCategoryModel';



@Injectable()
export class NewsShareReceiverCategoryService extends ApiCmsServerBase<NewsShareReceiverCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'NewsShareReceiverCategory';
  }
}
