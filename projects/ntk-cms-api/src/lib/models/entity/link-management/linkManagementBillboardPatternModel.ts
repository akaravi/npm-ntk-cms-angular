import { EnumManagementContentSettingType } from '../../enums/linkManagement/enumManagementContentSettingType';
import { EnumSharingPriceType } from '../../enums/linkManagement/enumSharingPriceType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';
import { LinkManagementTargetModel } from './linkManagementTargetModel';
//@@tag-Version-2201011
export class LinkManagementBillboardPatternModel extends BaseModuleEntity<number> {
  sharingLinkType: EnumSharingPriceType;
  settingType: EnumManagementContentSettingType;
  title: string;
  clickPrice: number;
  viewPrice: number;
  width: number;
  height: number;
  linkMainImageId?: number;
  linkBackgroundId?: number;
  linkFileIds: string;
  patternScript: string;
  targets: LinkManagementTargetModel[];
  billboards: LinkManagementBillboardModel[];
  linkMainImageIdSrc: string;
  linkBackgroundIdSrc: string;
  linkFileIdsSrc: string[];
}
