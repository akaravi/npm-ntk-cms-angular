
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { LinkManagementAccountingDetailModel } from '../../models/entity/link-management/linkManagementAccountingDetailModel';

@Injectable()
export class LinkManagementAccountingDetailService extends ApiCmsServerBase<LinkManagementAccountingDetailModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'LinkManagementAccountingDetail';
  }
}
