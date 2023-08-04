import { InputDataTypeEnum } from '../../enums/core/inputDataTypeEnum';
import { UiPropertyDesignEnum } from '../../enums/member/uiPropertyDesignEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyDetailGroupModel } from './memberPropertyDetailGroupModel';
import { MemberPropertyTypeModel } from './memberPropertyTypeModel';
//@@tag-Version-2201011
export class MemberPropertyDetailModel extends BaseModuleEntity<number> {
  title: string;
  iconFont: string;
  inputDataType: InputDataTypeEnum;
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

  uiDesignType: UiPropertyDesignEnum;
  uiDesignColor: string;
}
