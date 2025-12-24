import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';
//@@tag-Version-2201011
/**
 * گروه‌بندی جزئیات ملک برای نظم‌دهی فیلدهای سفارشی.
 */
export class EstatePropertyDetailGroupModel extends BaseModuleEntity<string> {
  /** عنوان گروه. */
  title: string;
  /** توضیح گروه. */
  description: string;
  /** نام آیکن. */
  iconFont: string;
  /** رنگ آیکن. */
  iconColor: string;
  /** ترتیب نمایش در فرم. */
  showInFormOrder?: number;
  /** ذخیره تاریخچه تغییرات گروه. */
  isHistoryable: boolean;
  /** قابلیت جستجو. */
  isSearchable: boolean;
  /** شناسه کاربری زمین مرتبط. */
  linkPropertyTypeLanduseId: string;
  /** لیست جزئیات زیرگروه. */
  propertyDetails: EstatePropertyDetailModel[];
}
