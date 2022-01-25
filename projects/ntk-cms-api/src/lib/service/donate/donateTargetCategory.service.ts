
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateTargetCategoryModel } from '../../models/entity/donate/donateTargetCategoryModel';

@Injectable()
export class DonateTargetCategoryService extends ApiCmsServerBase<DonateTargetCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'DonateTargetCategory';
  }
}
