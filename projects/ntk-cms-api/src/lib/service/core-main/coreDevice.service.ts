import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreDeviceModel } from '../../models/entity/core-main/coreDeviceModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreDeviceService extends ApiCmsServerBase<CoreDeviceModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreDevice';
  }
}
