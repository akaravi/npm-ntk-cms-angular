import { BaseModuleEntity } from '../base/baseModuleEntity';
import { WebDesignerMainPageTemplateModel } from './webDesignerMainPageTemplateModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی سایت قالب صفحه وب دیزاینر
 */
export class WebDesignerMainPageTemplateSiteCategoryModel extends BaseModuleEntity<string> {
  /** لینک به شناسه قالب صفحه */
  linkPageTemplateId: string;
  /** لینک به شناسه دسته‌بندی سایت */
  linkSiteCagegoryId: number;
  /** قالب صفحه (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_PageTemplate: WebDesignerMainPageTemplateModel;
  /** قالب صفحه */
  pageTemplate: WebDesignerMainPageTemplateModel;
}
