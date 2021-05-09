import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';

export class EstatePropertyDetailValueModel {
  Id: string;
  LinkPropertyDetailId: string;
  PropertyDetail: EstatePropertyDetailModel;
  Value: string;
  LinkHistoryId: string;
}
