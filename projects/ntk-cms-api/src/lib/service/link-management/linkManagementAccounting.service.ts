
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { LinkManagementAccountingModel } from '../../models/entity/link-management/linkManagementAccountingModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class LinkManagementAccountingService extends ApiCmsServerBase<LinkManagementAccountingModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'LinkManagementAccounting';
  }
}
