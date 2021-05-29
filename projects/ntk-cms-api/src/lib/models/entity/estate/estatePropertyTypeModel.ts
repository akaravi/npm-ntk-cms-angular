import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';
import { EstatePropertyTypeLanduseModel } from './estatePropertyTypeLanduseModel';
import { EstatePropertyTypeUsageModel } from './estatePropertyTypeUsageModel';

export class EstatePropertyTypeModel extends BaseModuleEntity<string> {
  LinkPropertyTypeLanduseId: string;
  LinkPropertyTypeUsageId: string;
  PropertyTypeLanduse: EstatePropertyTypeLanduseModel;
  PropertyTypeUsage: EstatePropertyTypeUsageModel;
}
