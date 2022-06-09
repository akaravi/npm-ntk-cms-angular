import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanModel } from './dataProviderPlanModel';

export class DataProviderPlanPriceModel extends BaseModuleEntity<number> {
  title: string;
  description: string;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
  periodDay: number;
  price: number;
  linkPlanId:number;
  plan: DataProviderPlanModel;
  virtual_Plan: DataProviderPlanModel;

}
