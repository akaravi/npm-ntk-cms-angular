import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateCategoryZoneModel } from '../../models/entity/estate/estateCategoryZoneModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateCategoryZoneService extends ApiCmsServerBase<EstateCategoryZoneModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateCategoryZone';
  }

}
