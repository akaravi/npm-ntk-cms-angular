import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyContentModel } from './biographyContentModel';
//@@tag-Version-2201011
/**
 * مدل سایر اطلاعات محتوای زندگینامه
 */
export class BiographyContentOtherInfoModel extends BaseModuleEntity<number> {
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
  virtual_Content: BiographyContentModel;
  /** محتوا */
  content: BiographyContentModel;
}
