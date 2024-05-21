
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { LinkManagementTargetCategoryModel } from '../../models/entity/link-management/linkManagementTargetCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class LinkManagementTargetCategoryService extends ApiCmsServerBase<LinkManagementTargetCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'LinkManagementTargetCategory';
  }
}
