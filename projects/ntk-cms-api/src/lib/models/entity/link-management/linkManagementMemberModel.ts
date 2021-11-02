import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementAccountingModel } from './linkManagementAccountingModel';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';

export class LinkManagementMemberModel extends BaseModuleEntity<number> {
  IsInBlackList: boolean;
  Description: string;
  LinkExternalCmsUserId: number;
  CurrentDebtor: number;
  CurrentCreditor: number;
  Accountings: LinkManagementAccountingModel[];
}
