import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanModel } from './dataProviderPlanModel';
import { DataProviderSourceModel } from './dataProviderSourceModel';
//@@tag-Version-2201011
/**
 * مدل منبع پلن ارائه‌دهنده داده
 */
export class DataProviderPlanSourceModel extends BaseModuleEntity<number> {
  /** لینک به شناسه پلن */
  linkPlanId: number;
  /** لینک به شناسه منبع */
  linkSourceId: number;
  /** پلن */
  plan: DataProviderPlanModel;
  virtual_Plan: DataProviderPlanModel;
  /** منبع */
  source: DataProviderSourceModel;
  virtual_Source: DataProviderSourceModel;
}
