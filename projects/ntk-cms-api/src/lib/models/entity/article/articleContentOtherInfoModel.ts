import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleContentModel } from './articleContentModel';
//@@tag-Version-2201011
/**
 * مدل اطلاعات دیگر محتوای مقاله
 */
export class ArticleContentOtherInfoModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** بدنه HTML */
  htmlBody: string;
  /** منبع */
  source: string;
  /** لینک به شناسه محتوا */
  linkContentId: number;
  /** شناسه نوع */
  typeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: ArticleContentModel;
  /** محتوا */
  content: ArticleContentModel;
}
