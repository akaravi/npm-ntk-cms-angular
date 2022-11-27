import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementAccountingModel } from './linkManagementAccountingModel';
//@@tag-Version-2201011
export class LinkManagementMemberModel extends BaseModuleEntity<number> {
  isInBlackList: boolean;
  description: string;
  linkExternalCmsUserId: number;
  currentDebtor: number;
  currentCreditor: number;
  accountings: LinkManagementAccountingModel[];
}
