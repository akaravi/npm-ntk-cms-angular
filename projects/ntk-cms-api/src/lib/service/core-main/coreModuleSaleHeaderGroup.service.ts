import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleSaleHeaderGroupModel } from '../../models/entity/core-main/coreModuleSaleHeaderGroupModel';

@Injectable({
  providedIn: 'root',
})
export class CoreModuleSaleHeaderGroupService extends ApiCmsServerBase<CoreModuleSaleHeaderGroupModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'CoreModuleSaleHeaderGroup';
  }
}
