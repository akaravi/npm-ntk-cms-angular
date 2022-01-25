import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { BlogContentCategoryModel } from '../../models/entity/blog/blogContentCategoryModel';


@Injectable()
export class BlogContentCategoryService extends ApiCmsServerBase<BlogContentCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'BlogContentCategory';
  }

}
