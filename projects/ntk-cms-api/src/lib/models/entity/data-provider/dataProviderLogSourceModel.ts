import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderLogSourceModel extends BaseModuleEntity<string> {
  LinkSourceId: number;
  DataJson: string;
}
