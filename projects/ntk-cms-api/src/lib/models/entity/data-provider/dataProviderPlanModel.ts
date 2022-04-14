import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanCategoryModel } from './dataProviderPlanCategoryModel';
import { DataProviderPlanClientModel } from './dataProviderPlanClientModel';
import { DataProviderPlanPriceModel } from './dataProviderPlanPriceModel';
import { DataProviderPlanSourceModel } from './dataProviderPlanSourceModel';

export class DataProviderPlanModel extends BaseModuleEntity<number> {
  Title: string;
  Description: string;
  LinkPlanCategoryId: number;
  PlanCategory: DataProviderPlanCategoryModel;
  virtual_PlanCategory: DataProviderPlanCategoryModel;
  PlanClients: DataProviderPlanClientModel[];
  PlanSources: DataProviderPlanSourceModel[];
  PlanPrices: DataProviderPlanPriceModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
}
