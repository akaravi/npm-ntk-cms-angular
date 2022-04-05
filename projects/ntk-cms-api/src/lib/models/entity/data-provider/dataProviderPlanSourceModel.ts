import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanModel } from './dataProviderPlanModel';
import { DataProviderSourceModel } from './dataProviderSourceModel';

export class DataProviderPlanSourceModel extends BaseModuleEntity<number> {
  LinkPlanId: number;
  LinkSourceId: number;
  Plan: DataProviderPlanModel;
  virtual_Plan: DataProviderPlanModel;
  Source: DataProviderSourceModel;
  virtual_Source: DataProviderSourceModel;
}
