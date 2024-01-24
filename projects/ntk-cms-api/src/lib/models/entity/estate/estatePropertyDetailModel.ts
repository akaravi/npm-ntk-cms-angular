import { InputDataTypeEnum } from '../../enums/core/inputDataTypeEnum';
import { BaseModuleEntity } from '../base/_export';
//@@tag-Version-2401241
export class EstatePropertyDetailModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  iconFont: string;
  iconColor: string;
  inputDataType: InputDataTypeEnum;
  invisibleForEndUser: boolean;
  invisibleForSubmiter: boolean;
  unit: string;
  required: boolean;
  isHistoryable: boolean;
  isSearchable: boolean;
  showInFormOrder?: number;
  showInFastSearch: boolean;
  linkPropertyTypeLanduseId: string;
  linkPropertyDetailGroupId: string;
  configValueDefaultValueJson: string;
  configValueDefaultValues: string[];
  configValueNullValueJson: string;
  configValueNullValues: string[];
  configValueForceUseDefaultValue: boolean;
  configValueMultipleChoice: boolean;
  configValueIntValueMin: number;
  configValueIntValueMax: number;
}
