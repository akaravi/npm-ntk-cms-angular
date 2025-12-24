import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderClientModel } from './dataProviderClientModel';
import { DataProviderPlanModel } from './dataProviderPlanModel';
//@@tag-Version-2201011
/**
 * مدل کلاینت پلن ارائه‌دهنده داده
 */
export class DataProviderPlanClientModel extends BaseModuleEntity<number> {
  /** تاریخ انقضا */
  expireDate: Date;
  /** لینک به شناسه پلن */
  linkPlanId: number;
  /** لینک به شناسه کلاینت */
  linkClientId: number;
  /** پلن */
  plan: DataProviderPlanModel;
  virtual_Plan: DataProviderPlanModel;
  /** کلاینت */
  client: DataProviderClientModel;
  virtual_Client: DataProviderClientModel;
}
