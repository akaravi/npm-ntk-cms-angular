import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { BiographyShareReceiverCategoryModel } from '../../models/entity/biography/biographyShareReceiverCategoryModel';



@Injectable()
export class BiographyShareReceiverCategoryService extends ApiCmsServerBase<BiographyShareReceiverCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'BiographyShareReceiverCategory';
  }
}
