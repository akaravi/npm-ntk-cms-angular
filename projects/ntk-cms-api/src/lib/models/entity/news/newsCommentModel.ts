import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsContentModel } from './newsContentModel';
//@@tag-Version-2201011
/**
 * کامنت اخبار
 */
export class NewsCommentModel extends BaseModuleEntity<number> {
  /** لینک به شناسه محتوا */
  linkContentId: number;
  /** لینک به شناسه والد */
  linkParentId: number;
  /** نویسنده */
  writer: string;
  /** متن کامنت */
  comment: string;
  /** تاریخ ثبت */
  registerDate: Date;
  /** تعداد لایک */
  sumLikeClick: number;
  /** تعداد دیسلایک */
  sumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: NewsContentModel;
  /** محتوا */
  content: NewsContentModel;
}
