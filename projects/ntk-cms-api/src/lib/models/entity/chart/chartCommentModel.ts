import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartContentModel } from './chartContentModel';
//@@tag-Version-2201011
/**
 * مدل کامنت چارت
 */
export class ChartCommentModel extends BaseModuleEntity<number> {
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
  virtual_Content: ChartContentModel;
  /** محتوا */
  content: ChartContentModel;
}
