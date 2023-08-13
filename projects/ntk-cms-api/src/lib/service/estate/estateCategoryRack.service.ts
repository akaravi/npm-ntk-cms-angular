import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateCategoryRackModel } from '../../models/entity/estate/estateCategoryRackModel';

@Injectable()
export class EstateCategoryRackService extends ApiCmsServerBase<EstateCategoryRackModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstateCategoryRack';
  }

}
