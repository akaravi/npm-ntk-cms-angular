
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { LinkManagementTargetCategoryModel } from '../../models/entity/link-management/linkManagementTargetCategoryModel';

@Injectable()
export class LinkManagementTargetCategoryService extends ApiCmsServerBase<LinkManagementTargetCategoryModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'LinkManagementTargetCategory';
  }
}
