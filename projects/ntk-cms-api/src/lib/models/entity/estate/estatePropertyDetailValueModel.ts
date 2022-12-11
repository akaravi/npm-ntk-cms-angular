import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';
//@@tag-Version-2212111
export class EstatePropertyDetailValueModel {
  id: string;
  linkPropertyDetailId: string;
  //propertyDetail: EstatePropertyDetailModel;
  value: string;
  linkHistoryId: string;
}
