
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyHistoryModel } from '../../models/entity/estate/estatePropertyHistoryModel';

@Injectable()
export class EstatePropertyHistoryService extends ApiCmsServerBase<EstatePropertyHistoryModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyHistory';
  }
}
