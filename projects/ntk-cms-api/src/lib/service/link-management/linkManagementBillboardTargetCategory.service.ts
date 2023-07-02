
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { LinkManagementBillboardTargetCategoryModel } from '../../models/entity/link-management/linkManagementBillboardTargetCategoryModel';

@Injectable()
export class LinkManagementBillboardTargetCategoryService extends ApiCmsServerBase<LinkManagementBillboardTargetCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'LinkManagementBillboardTargetCategory';
  }
}
