import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';

export class EstatePropertyDetailGroupModel extends BaseModuleEntity<string> {
  Title: string;
  Description: string;
  IconFont: string;
  IconColor: string;
  ShowInFormOrder?: number;
  IsHistoryable: boolean;
  IsSearchable: boolean;
  LinkPropertyTypeLanduseId: string;
  PropertyDetails: EstatePropertyDetailModel[];
}
