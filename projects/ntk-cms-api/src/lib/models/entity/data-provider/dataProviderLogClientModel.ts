import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderLogClientModel extends BaseModuleEntity<string> {
  linkLogDataId:string;
  linkClientId: number;
  linkPlanId: number;
  dataJson: string;
  otherDataJson: string;
}
