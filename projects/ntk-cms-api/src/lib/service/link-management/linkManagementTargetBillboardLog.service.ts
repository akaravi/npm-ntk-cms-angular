
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { LinkManagementTargetBillboardLogModel } from '../../models/entity/link-management/linkManagementTargetBillboardLogModel';

@Injectable()
export class LinkManagementTargetBillboardLogService extends ApiCmsServerBase<LinkManagementTargetBillboardLogModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'LinkManagementTargetBillboardLog';
  }
}
