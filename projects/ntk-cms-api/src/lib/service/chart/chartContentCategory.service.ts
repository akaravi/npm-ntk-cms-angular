import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { ChartContentCategoryModel } from '../../models/entity/chart/chartContentCategoryModel';


@Injectable()
export class ChartContentCategoryService extends ApiCmsServerBase<ChartContentCategoryModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ChartContentCategory';
  }

}
