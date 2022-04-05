import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderLogClientModel extends BaseModuleEntity<string> {
  LinkClientId: number;
  LinkPlanId: number;
  DataJson: string;
}
