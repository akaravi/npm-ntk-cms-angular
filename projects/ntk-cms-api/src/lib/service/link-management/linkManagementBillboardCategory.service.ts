
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { LinkManagementBillboardCategoryModel } from '../../models/entity/link-management/linkManagementBillboardCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class LinkManagementBillboardCategoryService extends ApiCmsServerBase<LinkManagementBillboardCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'LinkManagementBillboardCategory';
  }
}
