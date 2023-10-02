import { ManagementContentSettingTypeEnum } from '../../enums/link-management/managementContentSettingTypeEnum';
import { SharingPriceTypeEnum } from '../../enums/link-management/sharingPriceTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementTargetCategoryModel } from './linkManagementTargetCategoryModel';
//@@tag-Version-2201011
export class LinkManagementTargetModel extends BaseModuleEntity<number> {
  title: string;
  description: string;
  isPublic?: boolean;
  toWebAddress: string;
  currentClickCount: number;
  currentViewCount: number;
  linkManagementMemberId?: number;
  linkBillboardPatternId?: number;
  targetCategories: LinkManagementTargetCategoryModel[];
  webAddress: string;
  smallPreview: string;
  shareBeginDate?: Date;
  shareExpireDate?: Date;
  sharingLinkType: SharingPriceTypeEnum;
  clickPrice: number;
  viewPrice: number;
  maxPriceOfShareTotal: number;
  maxPriceOfSharePerDay: number;
  formulaPercent: number;
  linkMainImageId?: number;
  linkFileIds: string;
  contentSettingType: ManagementContentSettingTypeEnum;
  carryBillboardId: number;
  carryToWebAddress: string;
  linkMainImageIdSrc: string;
  linkFileIdsSrc: string[];
  qRCodeBase64: string;
  urlViewContent: string;
  urlViewContentShort: string;
  urlViewContentQRCodeBase64: string;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;
}

