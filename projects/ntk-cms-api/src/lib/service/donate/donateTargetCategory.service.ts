
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DonateTargetCategoryModel } from '../../models/entity/donate/donateTargetCategoryModel';

@Injectable({
  providedIn: 'root',
})
export class DonateTargetCategoryService extends ApiCmsServerBase<DonateTargetCategoryModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'DonateTargetCategory';
  }
}
