import { EnumInputDataType } from '../../enums/estate/enumInputDataType';

export class EstatePropertyDetailModel {
  Id: string;
  Title: string;
  Description: string;
  IconFont: string;
  IconColor: string;
  InputDataType: EnumInputDataType;

  InvisibleForEndUser: boolean;

  InvisibleForSubmiter: boolean;

  Unit: string;

  Required: boolean;
  IsHistoryable: boolean;
  IsSearchable: boolean;
  ShowInFormOrder?: number;
  LinkPropertyTypeLanduseId: string;
  LinkPropertyDetailGroupId: string;
  ConfigValueDefaultValueJson: string;
  ConfigValueDefaultValue: string[];
  ConfigValueForceUseDefaultValue: boolean;
  ConfigValueMultipleChoice: boolean;
  ConfigValueIntValueMin: number;
  ConfigValueIntValueMax: number;
}
