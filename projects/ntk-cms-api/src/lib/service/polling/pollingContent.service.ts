import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { PollingContentModel } from '../../models/entity/polling/pollingContentModel';
import { Injectable } from '@angular/core';


@Injectable()
export class PollingContentService extends ApiCmsServerBase<PollingContentModel, number>  {
  getModuleControllerUrl(): string {
    return 'PollingContent';
  }
}
