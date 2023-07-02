import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { PollingContentModel } from '../../models/entity/polling/pollingContentModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class PollingContentService extends ApiCmsServerBase<PollingContentModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'PollingContent';
  }
}
