import { BaseModuleEntity } from '../base/baseModuleEntity';
export class WebDesignerMainPageDependencyModel extends BaseModuleEntity<string> {
  Title: string;
  TitleML: string;
  TitleResourceLanguage: string;
  LinkModuleId?: number;
  CmsModuleClassName: string;
  ClassActionName: string;
}
