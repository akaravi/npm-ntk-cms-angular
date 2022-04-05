import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderClientModel } from './dataProviderClientModel';
import { DataProviderPlanModel } from './dataProviderPlanModel';

export class DataProviderPlanClientModel extends BaseModuleEntity<number> {
  ExpireDate: Date;
  LinkPlanId: number;
  LinkClientId: number;
  Plan: DataProviderPlanModel;
  virtual_Plan: DataProviderPlanModel;
  Client: DataProviderClientModel;
  virtual_Client: DataProviderClientModel;
}
