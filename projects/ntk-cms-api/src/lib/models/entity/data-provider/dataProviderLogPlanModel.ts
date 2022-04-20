import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderLogPlanModel extends BaseModuleEntity<string> {
  LinkLogDataId:string;
  LinkSourceId: number;
  LinkPlanId: number;
  DataJson: string;
  OtherDataJson: string;
}
