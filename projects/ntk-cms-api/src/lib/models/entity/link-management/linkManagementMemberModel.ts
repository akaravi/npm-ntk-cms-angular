import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementAccountingModel } from './linkManagementAccountingModel';
//@@tag-Version-2201011
/**
 * اعضای تبادل لینک
 */
export class LinkManagementMemberModel extends BaseModuleEntity<number> {
  /** در لیست سیاه قرار گرفته است */
  isInBlackList: boolean;
  /** توضیحات */
  description: string;
  /** لینک به ماژول کاربران */
  linkExternalCmsUserId: number;
  /** اعتبار فعلی بدهکار */
  currentDebtor: number;
  /** اعتبار فعلی بستانکار */
  currentCreditor: number;
  /** لیست حساب‌های حسابداری */
  accountings: LinkManagementAccountingModel[];
}
