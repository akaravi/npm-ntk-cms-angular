import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderLogSourceModel extends BaseModuleEntity<string> {
  linkLogDataId:string;
  linkSourceId: number;
  dataJson: string;
  otherDataJson: string;
}
