import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyHistoryModel extends BaseModuleEntity<string> {
  Title: string;
  LinkPropertyId: string;
  LinkFileIds: string;
}
