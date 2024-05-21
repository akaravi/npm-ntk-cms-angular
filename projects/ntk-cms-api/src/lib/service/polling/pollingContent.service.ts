import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { PollingContentModel } from '../../models/entity/polling/pollingContentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class PollingContentService extends ApiCmsServerBase<PollingContentModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'PollingContent';
  }
}
