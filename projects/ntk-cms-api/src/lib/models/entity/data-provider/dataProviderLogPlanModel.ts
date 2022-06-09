import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderLogPlanModel extends BaseModuleEntity<string> {
  linkLogDataId:string;
  linkSourceId: number;
  linkPlanId: number;
  dataJson: string;
  otherDataJson: string;
}
