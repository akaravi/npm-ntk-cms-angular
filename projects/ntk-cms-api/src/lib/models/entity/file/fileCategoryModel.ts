import { BaseModuleEntity } from '../base/baseModuleEntity';
import { FileContentModel } from './fileContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی فایل
 */
export class FileCategoryModel extends BaseModuleEntity<number> {
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
  children: FileCategoryModel[];
  /** دسته‌بندی */
  category: FileCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: FileCategoryModel;
  /** محتواها */
  contents: FileContentModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
