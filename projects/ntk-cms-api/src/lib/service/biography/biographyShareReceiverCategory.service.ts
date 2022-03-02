import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { BiographyShareReceiverCategoryModel } from '../../models/entity/biography/biographyShareReceiverCategoryModel';



@Injectable()
export class BiographyShareReceiverCategoryService extends ApiCmsServerBase<BiographyShareReceiverCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'BiographyShareReceiverCategory';
  }
}
