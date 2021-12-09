import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';
import { EstatePropertyTypeModel } from './estatePropertyTypeModel';

export class EstatePropertyTypeLanduseModel extends BaseModuleEntity<string> {
  Title: string;
  TitleML: string;
  TitleResourceLanguage: string;
  ContentCount: number;
  TitleCreatedYaer: string;
  TitlePartition: string;
  Description: string;
  IconFont: string;
  IconColor: string;
  LinkMainImageId: number;
  LinkMainImageIdSrc: string;
  PropertyTypes: EstatePropertyTypeModel[];
  PropertyDetails: EstatePropertyDetailModel[];
}
