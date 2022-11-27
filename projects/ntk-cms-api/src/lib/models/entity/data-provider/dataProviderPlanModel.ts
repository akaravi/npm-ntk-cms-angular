import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanCategoryModel } from './dataProviderPlanCategoryModel';
import { DataProviderPlanClientModel } from './dataProviderPlanClientModel';
import { DataProviderPlanPriceModel } from './dataProviderPlanPriceModel';
import { DataProviderPlanSourceModel } from './dataProviderPlanSourceModel';
//@@tag-Version-2201011
export class DataProviderPlanModel extends BaseModuleEntity<number> {
  title: string;
  description: string;
  linkPlanCategoryId: number;
  planCategory: DataProviderPlanCategoryModel;
  virtual_PlanCategory: DataProviderPlanCategoryModel;
  planClients: DataProviderPlanClientModel[];
  planSources: DataProviderPlanSourceModel[];
  planPrices: DataProviderPlanPriceModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
