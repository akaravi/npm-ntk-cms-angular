import { BaseModuleEntity } from '../base/baseModuleEntity';
import { WebDesignerMainPageTemplateSiteCategoryModel } from './webDesignerMainPageTemplateSiteCategoryModel';
//@@tag-Version-2201011
export class WebDesignerMainPageTemplateModel extends BaseModuleEntity<string> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  folder: string;
  indexFile: string;
  isPublish: boolean;
  description: string;
  pageTemplateSiteCategores: WebDesignerMainPageTemplateSiteCategoryModel[];
}
