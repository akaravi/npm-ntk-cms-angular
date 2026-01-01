import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی منبع Source DataProvider
 */
export class DataProviderSourceCategoryModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** آیکن فونت */
  fontIcon: string;
  /** لینک به شناسه والد */
  linkParentId?: number;
  /** دسته‌بندی والد (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_Parent: DataProviderSourceCategoryModel;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}

