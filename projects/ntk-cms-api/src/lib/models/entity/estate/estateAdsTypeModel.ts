import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateAdsTypeModel extends BaseModuleEntity<string> {
  Title: string;
  Description: string;
  StationLevel: number;
  ViewLevel: number;
  DayOfActivity: number;
  SalePrice: number;
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
  StationLevelDescription: string;
  ViewLevelDescription: string;
}
