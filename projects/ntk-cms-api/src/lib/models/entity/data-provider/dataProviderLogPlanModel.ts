import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class DataProviderLogPlanModel extends BaseModuleEntity<string> {
  linkLogDataId: string;
  linkSourceId: number;
  linkPlanId: number;
  dataJson: string;
  otherDataJson: string;
}
