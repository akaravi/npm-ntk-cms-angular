import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleSaleItemModel } from '../../models/entity/core-main/coreModuleSaleItemModel';


@Injectable({
  providedIn: 'root',
})
export class CoreModuleSaleItemService extends ApiCmsServerBase<CoreModuleSaleItemModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'CoreModuleSaleItem';
  }
}
