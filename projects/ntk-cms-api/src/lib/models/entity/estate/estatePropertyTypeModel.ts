import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';

export class EstatePropertyTypeModel extends BaseModuleEntity<string> {
  Title: string;
  TitleCreatedYaer: string;
  TitlePartition: string;
  LinkLocationId?: number;
  Description: string;
  LinkMainImageId: number;
  LinkMainImageIdSrc: string;
  PropertyDetails: EstatePropertyDetailModel[];

}
