import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderClientModel } from './dataProviderClientModel';
import { DataProviderPlanModel } from './dataProviderPlanModel';

export class DataProviderPlanClientModel extends BaseModuleEntity<number> {
  expireDate: Date;
  linkPlanId: number;
  linkClientId: number;
  plan: DataProviderPlanModel;
  virtual_Plan: DataProviderPlanModel;
  client: DataProviderClientModel;
  virtual_Client: DataProviderClientModel;
}
