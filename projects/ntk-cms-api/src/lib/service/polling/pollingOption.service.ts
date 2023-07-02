import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { PollingOptionModel } from '../../models/entity/polling/pollingOptionModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class PollingOptionService extends ApiCmsServerBase<PollingOptionModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'PollingOption';
  }
}
