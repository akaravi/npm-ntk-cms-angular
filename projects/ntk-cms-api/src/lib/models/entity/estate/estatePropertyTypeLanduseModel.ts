import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';
import { EstatePropertyTypeModel } from './estatePropertyTypeModel';

export class EstatePropertyTypeLanduseModel extends BaseModuleEntity<string> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  contentCount: number;
  titleCreatedYaer: string;
  titlePartition: string;
  description: string;
  iconFont: string;
  iconColor: string;
  linkMainImageId: number;
  linkMainImageIdSrc: string;
  propertyTypes: EstatePropertyTypeModel[];
  propertyDetails: EstatePropertyDetailModel[];
}
