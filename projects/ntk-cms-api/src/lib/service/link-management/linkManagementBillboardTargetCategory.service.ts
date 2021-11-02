
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { LinkManagementBillboardTargetCategoryModel } from '../../models/entity/link-management/linkManagementBillboardTargetCategoryModel';

@Injectable()
export class LinkManagementBillboardTargetCategoryService extends ApiCmsServerBase<LinkManagementBillboardTargetCategoryModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'LinkManagementBillboardTargetCategory';
  }
}
