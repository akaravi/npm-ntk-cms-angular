import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { BiographyContentCategoryModel } from '../../models/entity/biography/biographyContentCategoryModel';


@Injectable({
  providedIn: 'root',
})
export class BiographyContentCategoryService extends ApiCmsServerBase<BiographyContentCategoryModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'BiographyContentCategory';
  }

}
