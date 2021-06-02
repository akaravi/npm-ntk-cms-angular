import { BaseModuleEntity } from '../base/baseModuleEntity';
import { WebDesignerMainPageTemplateModel } from './webDesignerMainPageTemplateModel';

export class WebDesignerMainPageTemplateSiteCategoryModel extends BaseModuleEntity<string>{

  LinkPageTemplateId: string;
  LinkSiteCagegoryId: number;
  virtual_PageTemplate: WebDesignerMainPageTemplateModel;
  PageTemplate: WebDesignerMainPageTemplateModel;

}
