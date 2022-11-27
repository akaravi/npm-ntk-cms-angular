import { BaseModuleEntity } from '../base/baseModuleEntity';
import { WebDesignerMainPageTemplateModel } from './webDesignerMainPageTemplateModel';
//@@tag-Version-2201011
export class WebDesignerMainPageTemplateSiteCategoryModel extends BaseModuleEntity<string>{
  linkPageTemplateId: string;
  linkSiteCagegoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_PageTemplate: WebDesignerMainPageTemplateModel;
  pageTemplate: WebDesignerMainPageTemplateModel;
}
