import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsContentModel } from './newsContentModel';
//@@tag-Version-2201011
/**
 * اطلاعات اضافی محتوای اخبار
 */
export class NewsContentOtherInfoModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** متن HTML */
  htmlBody: string;
  /** منبع */
  source: string;
  /** لینک به شناسه محتوا */
  linkContentId: number;
  /** شناسه نوع */
  typeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: NewsContentModel;
  /** محتوا */
  content: NewsContentModel;
}
