import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementAccountingModel } from './linkManagementAccountingModel';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';

export class LinkManagementMemberModel extends BaseModuleEntity<number> {
  isInBlackList: boolean;
  description: string;
  linkExternalCmsUserId: number;
  currentDebtor: number;
  currentCreditor: number;
  accountings: LinkManagementAccountingModel[];
}
