import { EnumManagementContentSettingType } from '../../enums/linkManagement/enumManagementContentSettingType';
import { EnumSharingPriceType } from '../../enums/linkManagement/enumSharingPriceType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';
import { LinkManagementTargetModel } from './linkManagementTargetModel';

export class LinkManagementBillboardPatternModel extends BaseModuleEntity<number> {
  SharingLinkType: EnumSharingPriceType;
  SettingType: EnumManagementContentSettingType;
  Title: string;
  ClickPrice: number;
  ViewPrice: number;
  Width: number;
  Height: number;
  LinkMainImageId?: number;
  LinkBackgroundId?: number;
  LinkFileIds: string;
  PatternScript: string;
  Targets: LinkManagementTargetModel[];
  Billboards: LinkManagementBillboardModel[];
  LinkMainImageIdSrc: string;
  LinkBackgroundIdSrc: string;
  LinkFileIdsSrc: string[];
}
