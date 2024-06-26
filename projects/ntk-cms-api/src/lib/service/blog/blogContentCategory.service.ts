import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { BlogContentCategoryModel } from '../../models/entity/blog/blogContentCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class BlogContentCategoryService extends ApiCmsServerBase<BlogContentCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'BlogContentCategory';
  }

}
