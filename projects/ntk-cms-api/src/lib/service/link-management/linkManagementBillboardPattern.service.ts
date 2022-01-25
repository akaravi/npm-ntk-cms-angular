
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { LinkManagementBillboardPatternModel } from '../../models/entity/link-management/linkManagementBillboardPatternModel';

@Injectable()
export class LinkManagementBillboardPatternService extends ApiCmsServerBase<LinkManagementBillboardPatternModel, number>  {
  getModuleControllerUrl(): string {
    return 'LinkManagementBillboardPattern';
  }
}
