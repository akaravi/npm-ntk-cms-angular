import { EnumInputDataType } from "../../enums/estate/enumInputDataType";

export class EstatePropertyDetailModel {
  Id: string;
  Title: string;
  IconFont: string;

  InputDataType: EnumInputDataType;

  InvisibleForEndUser: boolean;

  InvisibleForSubmiter: boolean;

  Unit: string;

  Required: boolean;
  IsHistoryable: boolean;
  IsSearchable: boolean;
  ShowInFormOrder?: number;
  LinkPropertyTypeId: string;
  LinkPropertyDetailGroupId: string;
  ConfigValueDefaultValueJson: string;
  ConfigValueDefaultValue: string[];
  ConfigValueForceUseDefaultValue: boolean;
  ConfigValueMultipleChoice: boolean;
  ConfigValueIntValueMin: number;
  ConfigValueIntValueMax: number;
}
