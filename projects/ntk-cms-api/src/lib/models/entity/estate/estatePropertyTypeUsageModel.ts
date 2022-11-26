import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyTypeModel } from './estatePropertyTypeModel';

export class EstatePropertyTypeUsageModel extends BaseModuleEntity<string> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  contentCount: number;
  description: string;
  iconFont: string;
  iconColor: string;
  linkMainImageId: number;
  linkMainImageIdSrc: string;
  propertyTypes: EstatePropertyTypeModel[];
}
