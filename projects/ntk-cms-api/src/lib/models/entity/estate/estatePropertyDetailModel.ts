import { EnumInputDataType } from '../../enums/core/enumInputDataType';

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
  linkPropertyTypeLanduseId: string;
  linkPropertyDetailGroupId: string;
  configValueDefaultValueJson: string;
  configValueDefaultValue: string[];
  configValueForceUseDefaultValue: boolean;
  configValueMultipleChoice: boolean;
  configValueIntValueMin: number;
  configValueIntValueMax: number;
}
