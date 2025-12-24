import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyContentCategoryModel } from './biographyContentCategoryModel';
import { BiographyContentModel } from './biographyContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی زندگینامه
 */
export class BiographyCategoryModel extends BaseModuleEntity<number> {
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
  children: BiographyCategoryModel[];
  /** دسته‌بندی */
  category: BiographyCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: BiographyCategoryModel;
  /** محتواها */
  contents: BiographyContentModel[];
  /** دسته‌بندی‌های محتوا */
  contentCategores: BiographyContentCategoryModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;






}
