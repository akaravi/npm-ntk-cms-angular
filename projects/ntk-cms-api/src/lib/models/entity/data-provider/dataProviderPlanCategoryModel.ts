import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanModel } from './dataProviderPlanModel';


export class DataProviderPlanCategoryModel extends BaseModuleEntity<number> {
  title: string;
  linkMainImageId?: number;
  description: string;
  fontIcon: string;
  linkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_PlanCategory: DataProviderPlanCategoryModel;
  planCategory: DataProviderPlanCategoryModel;
  children: DataProviderPlanCategoryModel[];
  plans: DataProviderPlanModel[];
  linkMainImageIdSrc: string;
}
