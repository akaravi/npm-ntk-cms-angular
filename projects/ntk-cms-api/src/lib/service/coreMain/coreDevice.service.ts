import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreDeviceModel } from '../../models/entity/coreMain/coreDeviceModel';


@Injectable()
export class CoreDeviceService extends ApiCmsServerBase<CoreDeviceModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreDevice';
  }
}
