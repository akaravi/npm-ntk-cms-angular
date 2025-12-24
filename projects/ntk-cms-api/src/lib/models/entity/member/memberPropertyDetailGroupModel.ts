import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyDetailModel } from './memberPropertyDetailModel';
import { MemberPropertyTypeModel } from './memberPropertyTypeModel';
//@@tag-Version-2201011
/**
 * گروه جزئیات ویژگی عضو
 */
export class MemberPropertyDetailGroupModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** آیکن */
  iconFont: string;
  /** نمایش در فرم سفارش */
  showInFormOrder: number;
  /** لینک به شناسه نوع ویژگی عضو */
  linkPropertyTypeId: number;
  // tslint:disable-next-line: variable-name
  virtual_PropertyType: MemberPropertyTypeModel;

  /** لیست جزئیات ویژگی عضو */
  // tslint:disable-next-line: variable-name
  virtual_PropertyDetails: MemberPropertyDetailModel[];
}
