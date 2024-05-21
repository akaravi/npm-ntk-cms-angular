
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { LinkManagementCategoryModel } from '../../models/entity/link-management/linkManagementCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class LinkManagementCategoryService extends ApiCmsServerBase<LinkManagementCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'LinkManagementCategory';
  }
}
