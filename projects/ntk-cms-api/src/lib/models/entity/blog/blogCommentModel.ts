import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogContentModel } from './blogContentModel';
//@@tag-Version-2201011
/**
 * مدل کامنت وبلاگ
 */
export class BlogCommentModel extends BaseModuleEntity<number> {
  /** لینک به شناسه محتوا */
  linkContentId: number;
  /** لینک به شناسه والد */
  linkParentId: number;
  /** نویسنده */
  writer: string;
  /** کامنت */
  comment: string;
  /** تاریخ ثبت */
  registerDate: Date;
  /** مجموع لایک */
  sumLikeClick: number;
  /** مجموع دیسلایک */
  sumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: BlogContentModel;
  /** محتوا */
  content: BlogContentModel;
}
