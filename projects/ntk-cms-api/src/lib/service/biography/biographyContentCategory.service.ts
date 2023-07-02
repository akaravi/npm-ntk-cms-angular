import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { BiographyContentCategoryModel } from '../../models/entity/biography/biographyContentCategoryModel';


@Injectable()
export class BiographyContentCategoryService extends ApiCmsServerBase<BiographyContentCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'BiographyContentCategory';
  }

}
