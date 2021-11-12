import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateBillboardModel } from '../../models/entity/estate/estateBillboardModel';

@Injectable()
export class EstateBillboardService extends ApiCmsServerBase<EstateBillboardModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstateBillboard';
  }

}
