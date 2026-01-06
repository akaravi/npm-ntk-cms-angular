import { GetPropertiesInfoModel } from '../base/fieldInfo/getPropertiesInfoModel';
import { DataProviderSourcePublicConfigModel } from './dataProviderSourcePublicConfigModel';
//@@tag-Version-2201011
/**
 * مدل تنظیمات عمومی منبع API با فرمت JSON
 */
export class DataProviderSourcePublicConfigAliasJsonModel extends DataProviderSourcePublicConfigModel {
  /** فرمت JSON تنظیمات عمومی */
  publicConfigJsonFormatter: GetPropertiesInfoModel[];
}

