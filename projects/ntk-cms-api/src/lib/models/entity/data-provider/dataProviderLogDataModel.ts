import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل لاگ داده ارائه‌دهنده داده
 */
export class DataProviderLogDataModel extends BaseModuleEntity<string> {
  /** داده به صورت JSON */
  dataJson: string;
}
