import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanModel } from './dataProviderPlanModel';

export class DataProviderPlanPriceModel extends BaseModuleEntity<number> {
  Title: string;
  Description: string;
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
  PeriodDay: number;
  Price: number;
  LinkPlanId:number;
  Plan: DataProviderPlanModel;
  virtual_Plan: DataProviderPlanModel;

}
