import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { BiographyShareReceiverCategoryModel } from 'dist/ntk-cms-api/fesm2015/ntk-cms-api';


@Injectable()
export class BiographyShareReceiverCategoryService extends ApiCmsServerBase<BiographyShareReceiverCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'BiographyShareReceiverCategory';
  }
}
