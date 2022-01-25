import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreDeviceModel } from '../../models/entity/core-main/coreDeviceModel';


@Injectable()
export class CoreDeviceService extends ApiCmsServerBase<CoreDeviceModel, number>  {
  getModuleControllerUrl(): string {
    return 'CoreDevice';
  }
}
