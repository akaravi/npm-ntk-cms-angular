import { InputDataTypeEnum } from '../../enums/core/inputDataTypeEnum';
import { UiPropertyDesignEnum } from '../../enums/member/uiPropertyDesignEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyDetailGroupModel } from './memberPropertyDetailGroupModel';
import { MemberPropertyTypeModel } from './memberPropertyTypeModel';
//@@tag-Version-2201011
/**
 * جزئیات ویژگی عضو
 */
export class MemberPropertyDetailModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** آیکن */
  iconFont: string;
  /** نوع داده */
  inputDataType: InputDataTypeEnum;
  /** واحد پول */
  unit: string;
  /** قابل نمایش برای کاربر نهایی؟ */
  invisibleForEndUser: boolean;
  /** قابل نمایش برای ارسال کننده */
  invisibleForSubmiter: boolean;
  /** الزامی است؟ */
  required: boolean;
  /** تاریخچه است؟ */
  isHistoryable: boolean;
  /** قابل جست و جو است؟ */
  isSearchable: boolean;

  /** لینک به شناسه گروه جزئیات ویژگی عضو */
  linkPropertyDetailGroupId: number;
  // tslint:disable-next-line: variable-name
  virtual_PropertyDetailGroup: MemberPropertyDetailGroupModel;

  /** لینک به شناسه نوع ویژگی عضو */
  linkPropertyTypeId: number;
  // tslint:disable-next-line: variable-name
  virtual_PropertyType: MemberPropertyTypeModel;

  /** نمابس در فرم سفارش */
  showInFormOrder: number;
  /** مقدار پیش فرض */
  jsonDefaultValue: string;

  /** ui نوع طراحی */
  uiDesignType: UiPropertyDesignEnum;
  /** ui رنگ طراحی */
  uiDesignColor: string;
}
