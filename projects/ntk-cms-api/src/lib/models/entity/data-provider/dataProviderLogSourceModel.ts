import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderLogSourceModel extends BaseModuleEntity<string> {
  LinkLogDataId:string;
  LinkSourceId: number;
  DataJson: string;
  OtherDataJson: string;
}
