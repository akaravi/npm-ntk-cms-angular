import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderLogClientModel extends BaseModuleEntity<string> {
  LogDataId:string;
  LinkClientId: number;
  LinkPlanId: number;
  DataJson: string;
  OtherDataJson: string;
}
