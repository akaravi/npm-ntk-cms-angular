import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class ChartShareReceiverCategoryService extends ApiCmsServerBase<any, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ChartShareReceiverCategory';
  }
}
