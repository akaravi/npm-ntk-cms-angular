import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderLogPlanModel extends BaseModuleEntity<string> {
  LinkSourceId: number;
  LinkPlanId: number;
  DataJson: string;
}
