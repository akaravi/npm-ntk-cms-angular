import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderLogSourceModel extends BaseModuleEntity<string> {
  LogDataId:string;
  LinkSourceId: number;
  DataJson: string;
  OtherDataJson: string;
}
