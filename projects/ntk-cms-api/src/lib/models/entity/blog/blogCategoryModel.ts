import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogContentCategoryModel } from './blogContentCategoryModel';
import { BlogContentModel } from './blogContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی وبلاگ
 */
export class BlogCategoryModel extends BaseModuleEntity<number> {
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
  children: BlogCategoryModel[];
  /** دسته‌بندی */
  category: BlogCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: BlogCategoryModel;
  /** محتواها */
  contents: BlogContentModel[];
  /** دسته‌بندی‌های محتوا */
  contentCategores: BlogContentCategoryModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;






}
