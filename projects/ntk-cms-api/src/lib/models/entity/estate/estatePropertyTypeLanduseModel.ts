import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstatePropertyDetailModel } from './estatePropertyDetailModel';
import { EstatePropertyTypeModel } from './estatePropertyTypeModel';
//@@tag-Version-2201011
/**
 * کاربری زمین (Landuse) برای دسته‌بندی نوع ملک و فیلدهای وابسته.
 */
export class EstatePropertyTypeLanduseModel extends BaseModuleEntity<string> {
  /** عنوان کاربری زمین. */
  title: string;
  /** عنوان چندزبانه. */
  titleML: string;
  /** کلید/متن ترجمه عنوان. */
  titleResourceLanguage: string;
  /** تعداد محتواهای وابسته. */
  contentCount: number;
  /** فعال بودن سال ساخت. */
  createdYearActive: boolean;
  /** عنوان سال ساخت. */
  titleCreatedYaer: string;
  /** عنوان سال ساخت چندزبانه. */
  titleCreatedYaerML: string;
  /** عنوان سال ساخت برای ترجمه. */
  titleCreatedYaerResourceLanguage: string;
  /** فعال بودن پارتیشن. */
  partitionActive: boolean;
  /** عنوان پارتیشن. */
  titlePartition: string;
  /** عنوان پارتیشن چندزبانه. */
  titlePartitionML: string;
  /** عنوان پارتیشن برای ترجمه. */
  titlePartitionResourceLanguage: string;
  /** توضیحات کاربری زمین. */
  description: string;
  /** نام آیکن. */
  iconFont: string;
  /** رنگ آیکن. */
  iconColor: string;
  /** شناسه تصویر اصلی. */
  linkMainImageId: number;
  /** آدرس تصویر اصلی. */
  linkMainImageIdSrc: string;
  /** انواع ملک وابسته. */
  propertyTypes: EstatePropertyTypeModel[];
  /** جزئیات فیلدی وابسته. */
  propertyDetails: EstatePropertyDetailModel[];
}
