import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل لاگ منبع ارائه‌دهنده داده
 */
export class DataProviderLogSourceModel extends BaseModuleEntity<string> {
  /** لینک به شناسه لاگ داده */
  linkLogDataId: string;
  /** لینک به شناسه منبع */
  linkSourceId: number;
  /** داده به صورت JSON */
  dataJson: string;
  /** سایر داده‌ها به صورت JSON */
  otherDataJson: string;
}
