import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartContentCategoryModel } from './chartContentCategoryModel';
import { ChartContentModel } from './chartContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی چارت
 */
export class ChartCategoryModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** عنوان منبع زبان */
  titleResourceLanguage: string;
  /** تعداد محتوا */
  contentCount: number;
  /** توضیحات */
  description: string;
  /** آیکن فونت */
  fontIcon: string;
  /** گره والد */
  linkParentIdNode: string;
  /** لینک به شناسه والد */
  linkParentId: number;
  /** فرزندان */
  children: ChartCategoryModel[];
  /** دسته‌بندی */
  category: ChartCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ChartCategoryModel;
  /** محتواها */
  contents: ChartContentModel[];
  /** دسته‌بندی‌های محتوا */
  contentCategores: ChartContentCategoryModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
