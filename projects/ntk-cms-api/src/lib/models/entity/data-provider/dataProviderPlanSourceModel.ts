import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanModel } from './dataProviderPlanModel';
import { DataProviderSourceModel } from './dataProviderSourceModel';

export class DataProviderPlanSourceModel extends BaseModuleEntity<number> {
  linkPlanId: number;
  linkSourceId: number;
  plan: DataProviderPlanModel;
  virtual_Plan: DataProviderPlanModel;
  source: DataProviderSourceModel;
  virtual_Source: DataProviderSourceModel;
}
