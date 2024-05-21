
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { LinkManagementBillboardPatternModel } from '../../models/entity/link-management/linkManagementBillboardPatternModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class LinkManagementBillboardPatternService extends ApiCmsServerBase<LinkManagementBillboardPatternModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'LinkManagementBillboardPattern';
  }
}
