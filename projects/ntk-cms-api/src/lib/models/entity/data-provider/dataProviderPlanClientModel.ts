import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderClientModel } from './dataProviderClientModel';
import { DataProviderPlanModel } from './dataProviderPlanModel';
//@@tag-Version-2201011
/**
 * مدل کلاینت پلن ارائه‌دهنده داده
 */
export class DataProviderPlanClientModel extends BaseModuleEntity<string> {
  /** تاریخ انقضا */
  expireDate: Date;
  /** لینک به شناسه پلن */
  linkPlanId: string;
  /** لینک به شناسه کلاینت */
  linkClientId: string;
  /** پلن */
  plan: DataProviderPlanModel;
  virtual_Plan: DataProviderPlanModel;
  /** کلاینت */
  client: DataProviderClientModel;
  virtual_Client: DataProviderClientModel;
}
