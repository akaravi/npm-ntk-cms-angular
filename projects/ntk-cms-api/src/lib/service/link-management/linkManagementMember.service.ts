
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { LinkManagementMemberModel } from '../../models/entity/link-management/linkManagementMemberModel';

@Injectable()
export class LinkManagementMemberService extends ApiCmsServerBase<LinkManagementMemberModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'LinkManagementMember';
  }
}
