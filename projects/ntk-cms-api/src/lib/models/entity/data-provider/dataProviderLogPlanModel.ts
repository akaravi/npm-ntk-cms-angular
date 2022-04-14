import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderLogPlanModel extends BaseModuleEntity<string> {
  LogDataId:string;
  LinkSourceId: number;
  LinkPlanId: number;
  DataJson: string;
  OtherDataJson: string;
}
