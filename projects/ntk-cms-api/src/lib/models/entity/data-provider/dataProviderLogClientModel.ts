import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل لاگ کلاینت ارائه‌دهنده داده
 */
export class DataProviderLogClientModel extends BaseModuleEntity<string> {
  /** لینک به شناسه لاگ داده */
  linkLogDataId: string;
  /** لینک به شناسه کلاینت */
  linkClientId: number;
  /** لینک به شناسه پلن */
  linkPlanId: number;
  /** داده به صورت JSON */
  dataJson: string;
  /** سایر داده‌ها به صورت JSON */
  otherDataJson: string;
}
