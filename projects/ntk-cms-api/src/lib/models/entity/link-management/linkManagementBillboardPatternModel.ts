import { ManagementContentSettingTypeEnum } from '../../enums/link-management/managementContentSettingTypeEnum';
import { SharingPriceTypeEnum } from '../../enums/link-management/sharingPriceTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';
import { LinkManagementTargetModel } from './linkManagementTargetModel';
//@@tag-Version-2201011
export class LinkManagementBillboardPatternModel extends BaseModuleEntity<number> {
  sharingLinkType: SharingPriceTypeEnum;
  settingType: ManagementContentSettingTypeEnum;
  title: string;
  clickPrice: number;
  viewPrice: number;
  width: number;
  height: number;
  linkMainImageId?: number;
  linkBackgroundId?: number;
  linkFileIds: string;
  patternScript: string;
  patternScriptExample: string;
  targets: LinkManagementTargetModel[];
  billboards: LinkManagementBillboardModel[];
  linkMainImageIdSrc: string;
  linkBackgroundIdSrc: string;
  linkFileIdsSrc: string[];
}
