import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyTypeLanduseModel } from './estatePropertyTypeLanduseModel';
import { EstatePropertyTypeUsageModel } from './estatePropertyTypeUsageModel';
//@@tag-Version-2201011
/**
 * نوع ملک به‌عنوان اتصال کاربری زمین و نوع استفاده.
 */
export class EstatePropertyTypeModel extends BaseModuleEntity<string> {
  /** شناسه کاربری زمین. */
  linkPropertyTypeLanduseId: string;
  /** شناسه نوع استفاده. */
  linkPropertyTypeUsageId: string;
  /** ناوبری کاربری زمین. */
  propertyTypeLanduse: EstatePropertyTypeLanduseModel;
  /** ناوبری نوع استفاده. */
  propertyTypeUsage: EstatePropertyTypeUsageModel;
}
