import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';
//@@tag-Version-2201011
export class EstatePropertyDetailValueModel {
  id: string;
  linkPropertyDetailId: string;
  propertyDetail: EstatePropertyDetailModel;
  value: string;
  linkHistoryId: string;
}
