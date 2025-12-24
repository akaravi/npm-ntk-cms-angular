import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی کاتالوگ
 */
export class CatalogCategoryModel extends BaseModuleEntity<string> {
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
  linkParentId: string;
  /** فرزندان */
  children: CatalogCategoryModel[];
  /** دسته‌بندی */
  category: CatalogCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: CatalogCategoryModel;

  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
