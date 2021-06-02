import { BaseModuleEntity } from '../base/baseModuleEntity';
import { WebDesignerMainPageTemplateSiteCategoryModel } from './webDesignerMainPageTemplateSiteCategoryModel';

export class WebDesignerMainPageTemplateModel extends BaseModuleEntity<string>{
    Title: string;
    TitleML: string;
    TitleResourceLanguage: string;
    Folder: string;
    IndexFile: string;
    IsPublish: boolean;
    Description: string;
    PageTemplateSiteCategores:WebDesignerMainPageTemplateSiteCategoryModel[];
}
