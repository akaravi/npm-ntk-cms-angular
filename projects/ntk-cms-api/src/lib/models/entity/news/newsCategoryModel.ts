import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsContentCategoryModel } from './newsContentCategoryModel';
import { NewsContentModel } from './newsContentModel';
//@@tag-Version-2201011
/**
 * دسته‌بندی اخبار
 */
export class NewsCategoryModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** عنوان چندزبانه */
  titleResourceLanguage: string;
  /** تعداد محتوا */
  contentCount: number;
  /** توضیحات */
  description: string;
  /** آیکن فونت */
  fontIcon: string;
  /** شناسه گره والد */
  linkParentIdNode: string;
  /** لینک به شناسه والد */
  linkParentId: number;
  /** لیست فرزندان */
  children: NewsCategoryModel[];
  /** دسته‌بندی والد */
  category: NewsCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: NewsCategoryModel;
  /** لیست محتواها */
  contents: NewsContentModel[];
  /** لیست دسته‌بندی‌های محتوا */
  contentCategores: NewsContentCategoryModel[];
  /** تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
