import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartContentModel } from './chartContentModel';
//@@tag-Version-2201011
/**
 * مدل سایر اطلاعات محتوای چارت
 */
export class ChartContentOtherInfoModel extends BaseModuleEntity<number> {
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
  virtual_Content: ChartContentModel;
  /** محتوا */
  content: ChartContentModel;
}
