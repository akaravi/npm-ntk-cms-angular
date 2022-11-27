import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class DataProviderLogClientModel extends BaseModuleEntity<string> {
  linkLogDataId:string;
  linkClientId: number;
  linkPlanId: number;
  dataJson: string;
  otherDataJson: string;
}
