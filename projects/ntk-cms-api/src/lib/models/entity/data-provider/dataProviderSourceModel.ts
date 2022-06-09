import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanSourceModel } from './dataProviderPlanSourceModel';

export class DataProviderSourceModel extends BaseModuleEntity<number> {
  title: string;
  description: string;
  keyCode: string;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;

  planSources: DataProviderPlanSourceModel[];
}
