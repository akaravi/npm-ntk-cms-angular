import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleSaleHeaderModel } from '../../models/entity/core-main/coreModuleSaleHeaderModel';


@Injectable()
export class CoreModuleSaleHeaderService extends ApiCmsServerBase<CoreModuleSaleHeaderModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreModuleSaleHeader';
  }
}
