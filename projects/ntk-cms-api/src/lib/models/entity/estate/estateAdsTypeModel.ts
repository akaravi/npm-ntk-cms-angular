import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateAdsTypeModel extends BaseModuleEntity<string> {
  Title: string;
  Description: string;
  StationLevel: number;
  ViewLevel: number;
  DayOfActivity: number;
  Price: number;
  LinkImageId?: number;
  LinkImageIdSrc: string;
}
