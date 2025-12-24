import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationSourceModel } from './applicationSourceModel';
/**
 * مدل دسته‌بندی سایت منبع اپلیکیشن
 */
//@@tag-Version-2201011
export class ApplicationSourceSiteCategoryModel extends BaseModuleEntity<number> {
  /** لینک به شناسه منبع */
  linkSourceId: number;
  /** لینک به شناسه دسته‌بندی سایت */
  linkSiteCagegoryId: number;
  // tslint:disable-next-line: variable-name
  /** منبع (مجازی) */
  virtual_Source: ApplicationSourceModel;
  /** منبع */
  source: ApplicationSourceModel;
}
