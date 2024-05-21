import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { PollingOptionModel } from '../../models/entity/polling/pollingOptionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class PollingOptionService extends ApiCmsServerBase<PollingOptionModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'PollingOption';
  }
}
