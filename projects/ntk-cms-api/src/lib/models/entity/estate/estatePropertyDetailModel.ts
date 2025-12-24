import { InputDataTypeEnum } from '../../enums/core/inputDataTypeEnum';
import { BaseModuleEntity } from '../base/_export';
//@@tag-Version-2401241
/**
 * جزئیات ویژگی ملک برای تعریف فیلدهای پویا و قابل جستجو.
 */
export class EstatePropertyDetailModel extends BaseModuleEntity<string> {
  /** عنوان فیلد. */
  title: string;
  /** توضیح تکمیلی. */
  description: string;
  /** نام آیکن. */
  iconFont: string;
  /** رنگ آیکن. */
  iconColor: string;
  /** نوع داده ورودی. */
  inputDataType: InputDataTypeEnum;
  /** مخفی برای کاربر نهایی. */
  invisibleForEndUser: boolean;
  /** مخفی برای ثبت‌کننده. */
  invisibleForSubmiter: boolean;
  /** واحد نمایش/اندازه‌گیری. */
  unit: string;
  /** الزام پر کردن. */
  required: boolean;
  /** ذخیره تاریخچه تغییرات. */
  isHistoryable: boolean;
  /** قابلیت جستجو. */
  isSearchable: boolean;
  /** ترتیب نمایش در فرم. */
  showInFormOrder?: number;
  /** نمایش در جستجوی سریع. */
  showInFastSearch: boolean;
  /** شناسه کاربری زمین مرتبط. */
  linkPropertyTypeLanduseId: string;
  /** شناسه گروه جزئیات. */
  linkPropertyDetailGroupId: string;
  /** مقدار پیش‌فرض به صورت JSON. */
  configValueDefaultValueJson: string;
  /** مقادیر پیش‌فرض تفکیک‌شده. */
  configValueDefaultValues: string[];
  /** مقدار Null قابل قبول به صورت JSON. */
  configValueNullValueJson: string;
  /** مقادیر Null قابل قبول تفکیک‌شده. */
  configValueNullValues: string[];
  /** اجبار به استفاده از مقدار پیش‌فرض. */
  configValueForceUseDefaultValue: boolean;
  /** امکان چند انتخابی. */
  configValueMultipleChoice: boolean;
  /** حداقل مقدار عددی. */
  configValueIntValueMin: number;
  /** حداکثر مقدار عددی. */
  configValueIntValueMax: number;
}
