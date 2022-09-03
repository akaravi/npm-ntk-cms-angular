import { EnumInputDataType } from '../../Enums/member/enumInputDataType';
import { EnumUiPropertyDesign } from '../../Enums/member/enumUiPropertyDesign';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyDetailGroupModel } from './memberPropertyDetailGroupModel';
import { MemberPropertyTypeModel } from './memberPropertyTypeModel';

export class MemberPropertyDetailModel extends BaseModuleEntity<number> {
  title: string;
  iconFont: string;
  inputDataType: EnumInputDataType;
  unit: string;
  invisibleForEndUser: boolean;
  invisibleForSubmiter: boolean;
  required: boolean;
  isHistoryable: boolean;
  isSearchable: boolean;

  linkPropertyDetailGroupId: number;
  // tslint:disable-next-line: variable-name
  virtual_PropertyDetailGroup: MemberPropertyDetailGroupModel;

  linkPropertyTypeId: number;
  // tslint:disable-next-line: variable-name
  virtual_PropertyType: MemberPropertyTypeModel;

  showInFormOrder: number;
  jsonDefaultValue: string;

  uiDesignType: EnumUiPropertyDesign;
  uiDesignColor: string;
}
