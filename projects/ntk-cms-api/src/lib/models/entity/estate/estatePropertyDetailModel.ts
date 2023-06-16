import { EnumInputDataType } from '../../enums/core/enumInputDataType';
//@@tag-Version-2201011
export class EstatePropertyDetailModel {
  id: string;
  title: string;
  description: string;
  iconFont: string;
  iconColor: string;
  inputDataType: EnumInputDataType;

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
