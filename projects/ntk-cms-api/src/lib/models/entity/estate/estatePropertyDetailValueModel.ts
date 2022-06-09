import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';

export class EstatePropertyDetailValueModel {
  id: string;
  linkPropertyDetailId: string;
  propertyDetail: EstatePropertyDetailModel;
  value: string;
  linkHistoryId: string;
}
