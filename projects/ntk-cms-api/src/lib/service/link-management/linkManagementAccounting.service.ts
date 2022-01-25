
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { LinkManagementAccountingModel } from '../../models/entity/link-management/linkManagementAccountingModel';

@Injectable()
export class LinkManagementAccountingService extends ApiCmsServerBase<LinkManagementAccountingModel, number>  {
  getModuleControllerUrl(): string {
    return 'LinkManagementAccounting';
  }
}
