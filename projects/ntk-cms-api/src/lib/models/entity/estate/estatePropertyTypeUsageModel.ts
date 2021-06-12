import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';
import { EstatePropertyTypeModel } from './estatePropertyTypeModel';

export class EstatePropertyTypeUsageModel extends BaseModuleEntity<string> {
  Title: string;
  Description: string;
  IconFont: string;
  IconColor: string;
  LinkMainImageId: number;
  LinkMainImageIdSrc: string;
  PropertyTypes: EstatePropertyTypeModel[];
}
