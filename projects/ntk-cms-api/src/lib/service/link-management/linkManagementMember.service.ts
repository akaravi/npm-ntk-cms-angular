
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { LinkManagementMemberModel } from '../../models/entity/link-management/linkManagementMemberModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class LinkManagementMemberService extends ApiCmsServerBase<LinkManagementMemberModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'LinkManagementMember';
  }
}
