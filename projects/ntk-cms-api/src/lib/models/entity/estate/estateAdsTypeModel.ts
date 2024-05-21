import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class EstateAdsTypeModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  paymentForMainSite: boolean;
  stationLevel: number;
  viewLevel: number;
  dayOfActivity: number;
  salePrice: number;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
  stationLevelDescription: string[];
  viewLevelDescription: string[];

}
