
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { LinkManagementAccountingModel } from '../../models/entity/link-management/linkManagementAccountingModel';

@Injectable()
export class LinkManagementAccountingService extends ApiCmsServerBase<LinkManagementAccountingModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'LinkManagementAccounting';
  }
}
