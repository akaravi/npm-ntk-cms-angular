import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل لاگ پلن ارائه‌دهنده داده
 */
export class DataProviderLogPlanModel extends BaseModuleEntity<string> {
  /** لینک به شناسه لاگ داده */
  linkLogDataId: string;
  /** لینک به شناسه منبع */
  linkSourceId: number;
  /** لینک به شناسه پلن */
  linkPlanId: number;
  /** داده به صورت JSON */
  dataJson: string;
  /** سایر داده‌ها به صورت JSON */
  otherDataJson: string;
}
