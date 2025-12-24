import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی هایپر شاپ (Cache)
 */
export class HyperShopCategoryModel extends BaseModuleEntity<string> {
  /** کد */
  code: string;
  /** کد والد */
  parentCode: string;
  /** نام */
  name: string;
  /** تصویر */
  image: string;
  /** یادداشت */
  memo: string;
}
