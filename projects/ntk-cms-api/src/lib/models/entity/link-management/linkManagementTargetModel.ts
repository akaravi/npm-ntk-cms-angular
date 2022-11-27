import { EnumManagementContentSettingType } from '../../enums/linkManagement/enumManagementContentSettingType';
import { EnumSharingPriceType } from '../../enums/linkManagement/enumSharingPriceType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class LinkManagementTargetModel extends BaseModuleEntity<number> {
  title: string;
  description: string;
  isPublic?: boolean;
  toWebAddress: string;
  currentClickCount: number;
  currentViewCount: number;
  linkManagementMemberId?: number;
  linkTargetCategoryId?: number;
  linkBillboardPatternId?: number;
  webAddress: string;
  smallPreview: string;
  shareBeginDate?: Date;
  shareExpireDate?: Date;
  sharingLinkType: EnumSharingPriceType;
  clickPrice: number;
  viewPrice: number;
  maxPriceOfShareTotal: number;
  maxPriceOfSharePerDay: number;
  formulaPercent: number;
  linkMainImageId?: number;
  linkFileIds: string;
  contentSettingType: EnumManagementContentSettingType;
  carryBillboardId: number;
  carryToWebAddress: string;
  linkMainImageIdSrc: string;
  linkFileIdsSrc: string[];
  qRCodeBase64: string;
}

