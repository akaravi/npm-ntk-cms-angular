import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanSourceModel } from './dataProviderPlanSourceModel';
//@@tag-Version-2201011
export class DataProviderSourceModel extends BaseModuleEntity<number> {
  title: string;
  description: string;
  keyCode: string;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;

  planSources: DataProviderPlanSourceModel[];
}
