import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { BlogContentCategoryModel } from '../../models/entity/blog/blogContentCategoryModel';


@Injectable()
export class BlogContentCategoryService extends ApiCmsServerBase<BlogContentCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'BlogContentCategory';
  }

}
