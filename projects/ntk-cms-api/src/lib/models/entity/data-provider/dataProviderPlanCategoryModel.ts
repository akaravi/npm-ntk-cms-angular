import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanModel } from './dataProviderPlanModel';


export class DataProviderPlanCategoryModel extends BaseModuleEntity<number> {
  Title: string;
  LinkMainImageId?: number;
  Description: string;
  FontIcon: string;
  LinkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_PlanCategory: DataProviderPlanCategoryModel;
  PlanCategory: DataProviderPlanCategoryModel;
  Children: DataProviderPlanCategoryModel[];
  Plans: DataProviderPlanModel[];
  LinkMainImageIdSrc: string;
}
