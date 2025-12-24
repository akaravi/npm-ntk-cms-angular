import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyTypeModel } from './estatePropertyTypeModel';
//@@tag-Version-2201011
/**
 * نوع استفاده ملک (Usage) برای تفکیک کاربرد ملک (مسکونی/اداری/تجاری و ...).
 */
export class EstatePropertyTypeUsageModel extends BaseModuleEntity<string> {
  /** عنوان نوع استفاده. */
  title: string;
  /** عنوان چندزبانه. */
  titleML: string;
  /** کلید/متن ترجمه عنوان. */
  titleResourceLanguage: string;
  /** تعداد محتواهای وابسته. */
  contentCount: number;
  /** توضیح نوع استفاده. */
  description: string;
  /** نام آیکن. */
  iconFont: string;
  /** رنگ آیکن. */
  iconColor: string;
  /** شناسه تصویر اصلی. */
  linkMainImageId: number;
  /** آدرس تصویر اصلی. */
  linkMainImageIdSrc: string;
  /** انواع ملک وابسته به این نوع استفاده. */
  propertyTypes: EstatePropertyTypeModel[];
}
