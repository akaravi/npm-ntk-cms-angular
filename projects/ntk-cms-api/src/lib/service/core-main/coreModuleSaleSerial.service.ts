import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleSaleSerialModel } from '../../models/entity/core-main/coreModuleSaleSerialModel';


@Injectable()
export class CoreModuleSaleSerialService extends ApiCmsServerBase<CoreModuleSaleSerialModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreModuleSaleSerial';
  }
}
