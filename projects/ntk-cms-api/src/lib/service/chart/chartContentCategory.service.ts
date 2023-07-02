import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ChartContentCategoryModel } from '../../models/entity/chart/chartContentCategoryModel';


@Injectable()
export class ChartContentCategoryService extends ApiCmsServerBase<ChartContentCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ChartContentCategory';
  }

}
