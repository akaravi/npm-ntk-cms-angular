import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateBillboardModel } from '../../models/entity/estate/estateBillboardModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateBillboardService extends ApiCmsServerBase<EstateBillboardModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateBillboard';
  }

}
