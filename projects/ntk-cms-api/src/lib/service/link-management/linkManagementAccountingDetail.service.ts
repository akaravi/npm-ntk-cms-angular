
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { LinkManagementAccountingDetailModel } from '../../models/entity/link-management/linkManagementAccountingDetailModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class LinkManagementAccountingDetailService extends ApiCmsServerBase<LinkManagementAccountingDetailModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'LinkManagementAccountingDetail';
  }
}
