import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyAdsTypeModel extends BaseModuleEntity<string> {
  Title: string;
  Description: string;
  StationLevel: number;
  ViewLevel: number;
  DayOfActivity: number;
  Price: number;
}
