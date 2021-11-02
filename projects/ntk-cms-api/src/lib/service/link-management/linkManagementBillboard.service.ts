
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { LinkManagementBillboardModel } from '../../models/entity/link-management/linkManagementBillboardModel';

@Injectable()
export class LinkManagementBillboardService extends ApiCmsServerBase<LinkManagementBillboardModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'LinkManagementBillboard';
  }
}
