
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyHistoryModel } from '../../models/entity/estate/estatePropertyHistoryModel';
import { EstatePropertyHistoryFilterModel } from '../../models/filters/estate/estatePropertyHistoryFilterModel';

@Injectable()
export class EstatePropertyHistoryService extends ApiCmsServerBase<EstatePropertyHistoryModel, string, EstatePropertyHistoryFilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyHistory';
  }

}
