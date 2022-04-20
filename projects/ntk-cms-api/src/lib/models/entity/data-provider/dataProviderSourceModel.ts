import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanSourceModel } from './dataProviderPlanSourceModel';

export class DataProviderSourceModel extends BaseModuleEntity<number> {
  Title: string;
  Description: string;
  KeyCode: string;
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;

  PlanSources: DataProviderPlanSourceModel[];
}
