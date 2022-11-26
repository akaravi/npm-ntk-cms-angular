import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyTypeLanduseModel } from './estatePropertyTypeLanduseModel';
import { EstatePropertyTypeUsageModel } from './estatePropertyTypeUsageModel';
//@@tag-Version-2201011
export class EstatePropertyTypeModel extends BaseModuleEntity<string> {
  linkPropertyTypeLanduseId: string;
  linkPropertyTypeUsageId: string;
  propertyTypeLanduse: EstatePropertyTypeLanduseModel;
  propertyTypeUsage: EstatePropertyTypeUsageModel;
}
