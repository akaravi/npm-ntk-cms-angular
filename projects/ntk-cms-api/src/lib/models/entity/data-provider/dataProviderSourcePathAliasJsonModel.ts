import { GetPropertiesInfoModel } from '../base/fieldInfo/getPropertiesInfoModel';
import { DataProviderSourcePathModel } from './dataProviderSourcePathModel';
//@@tag-Version-2201011
/**
 * مدل مسیر منبع API ارائه‌دهنده داده
 */
export class DataProviderSourcePathAliasJsonModel extends DataProviderSourcePathModel {
  privateConfigJsonFormatter: GetPropertiesInfoModel[];
}
