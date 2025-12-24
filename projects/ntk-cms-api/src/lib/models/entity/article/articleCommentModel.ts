import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleContentModel } from './articleContentModel';
//@@tag-Version-2201011
/**
 * مدل نظر مقاله
 */
export class ArticleCommentModel extends BaseModuleEntity<number> {
  /** لینک به شناسه محتوا */
  linkContentId: number;
  /** لینک به شناسه والد */
  linkParentId: number;
  /** نویسنده */
  writer: string;
  /** نظر */
  comment: string;
  /** تاریخ ثبت */
  registerDate: Date;
  /** مجموع کلیک لایک */
  sumLikeClick: number;
  /** مجموع کلیک دیسلایک */
  sumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: ArticleContentModel;
  /** محتوا */
  content: ArticleContentModel;
}
