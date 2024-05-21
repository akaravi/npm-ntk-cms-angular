import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateCategoryRackModel } from '../../models/entity/estate/estateCategoryRackModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateCategoryRackService extends ApiCmsServerBase<EstateCategoryRackModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateCategoryRack';
  }

}
