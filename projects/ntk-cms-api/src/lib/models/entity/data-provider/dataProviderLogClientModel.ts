import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderLogClientModel extends BaseModuleEntity<string> {
  LinkLogDataId:string;
  LinkClientId: number;
  LinkPlanId: number;
  DataJson: string;
  OtherDataJson: string;
}
