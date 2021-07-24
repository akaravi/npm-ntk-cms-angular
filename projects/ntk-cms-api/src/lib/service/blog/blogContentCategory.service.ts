import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { BlogContentCategoryModel } from '../../models/entity/blog/blogContentCategoryModel';


@Injectable({
  providedIn: 'root',
})
export class BlogContentCategoryService extends ApiCmsServerBase<BlogContentCategoryModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'BlogContentCategory';
  }

}
