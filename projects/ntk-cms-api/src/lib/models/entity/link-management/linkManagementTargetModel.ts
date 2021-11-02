import { EnumManagementContentSettingType } from '../../enums/linkManagement/enumManagementContentSettingType';
import { EnumSharingPriceType } from '../../enums/linkManagement/enumSharingPriceType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';

export class LinkManagementTargetModel extends BaseModuleEntity<number> {
  Title: string;
  Description: string;
  isPublic?: boolean;
  ToWebAddress: string;
  CurrentClickCount: number;
  CurrentViewCount: number;
  LinkManagementMemberId?: number;
  LinkTargetCategoryId?: number;
  LinkBillboardPatternId?: number;
  WebAddress: string;
  SmallPreview: string;
  ShareBeginDate?: Date;
  ShareExpireDate?: Date;
  SharingLinkType: EnumSharingPriceType;
  ClickPrice: number;
  ViewPrice: number;
  MaxPriceOfShareTotal: number;
  MaxPriceOfSharePerDay: number;
  FormulaPercent: number;
  LinkMainImageId?: number;
  LinkFileIds: string;
  ContentSettingType: EnumManagementContentSettingType;
  CarryBillboardId: number;
  CarryToWebAddress: string;
  LinkMainImageIdSrc: string;
  LinkFileIdsSrc: string[];
  QRCodeBase64: string;
}

