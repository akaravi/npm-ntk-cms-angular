import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogContentModel } from './blogContentModel';
//@@tag-Version-2201011
/**
 * مدل سایر اطلاعات محتوای وبلاگ
 */
export class BlogContentOtherInfoModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** بدنه HTML */
  htmlBody: string;
  /** منبع */
  source: string;
  /** لینک به شناسه محتوا */
  linkContentId: number;
  /** نوع شناسه */
  typeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: BlogContentModel;
  /** محتوا */
  content: BlogContentModel;
}
