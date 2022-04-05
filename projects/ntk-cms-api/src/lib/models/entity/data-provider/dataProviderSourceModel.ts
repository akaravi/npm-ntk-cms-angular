import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanSourceModel } from './dataProviderPlanSourceModel';

export class DataProviderSourceModel extends BaseModuleEntity<number> {
  Title: string;
  Description: string;
  HashMd5: string;
  KeyCode: string;
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
  LinkFileIds: string;
  PlanSource: DataProviderPlanSourceModel[];
}
