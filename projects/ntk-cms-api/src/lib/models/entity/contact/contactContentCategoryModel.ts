import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ContactCategoryModel } from './contactCategoryModel';
import { ContactContentModel } from './contactContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی محتوای مخاطب
 */
export class ContactContentCategoryModel extends BaseModuleEntity<string> {
  /** محتوا */
  content: ContactContentModel;
  /** دسته‌بندی */
  category: ContactCategoryModel;
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId: string;
  /** لینک به شناسه محتوا */
  linkContentId: string;
}
