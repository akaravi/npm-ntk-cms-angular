import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';
//@@tag-Version-2201011
export class EstatePropertyDetailGroupModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  iconFont: string;
  iconColor: string;
  showInFormOrder?: number;
  isHistoryable: boolean;
  isSearchable: boolean;
  linkPropertyTypeLanduseId: string;
  propertyDetails: EstatePropertyDetailModel[];
}
