import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { PollingCategoryModel } from '../../models/entity/polling/pollingCategoryModel';
import { Injectable } from '@angular/core';


@Injectable()
export class PollingCategoryService extends ApiCmsServerBase<PollingCategoryModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'PollingCategory';
  }
}
