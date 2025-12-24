import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * دسته‌بندی مدیریت لینک
 */
export class LinkManagementCategoryModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** تصویر اصلی */
  linkMainImageId?: number;
  /** توضیحات */
  description: string;
  /** آیکن فونت */
  fontIcon: string;
  /** لینک به شناسه والد */
  linkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_TargetCategory: LinkManagementCategoryModel;
  /** دسته‌بندی والد */
  targetCategory: LinkManagementCategoryModel;
  /** لیست فرزندان */
  children: LinkManagementCategoryModel[];
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
