import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class DataProviderLogSourceModel extends BaseModuleEntity<string> {
  linkLogDataId: string;
  linkSourceId: number;
  dataJson: string;
  otherDataJson: string;
}
