import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateAdsTypeModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  paymentForMainSite:boolean;
  stationLevel: number;
  viewLevel: number;
  dayOfActivity: number;
  salePrice: number;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
  stationLevelDescription: string[];
  viewLevelDescription: string[];

}
