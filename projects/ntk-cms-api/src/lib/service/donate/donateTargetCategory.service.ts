
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DonateTargetCategoryModel } from '../../models/entity/donate/donateTargetCategoryModel';

@Injectable()
export class DonateTargetCategoryService extends ApiCmsServerBase<DonateTargetCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DonateTargetCategory';
  }
}
