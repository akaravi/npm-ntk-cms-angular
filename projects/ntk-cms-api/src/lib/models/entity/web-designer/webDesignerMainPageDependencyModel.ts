import { BaseModuleEntity } from '../base/baseModuleEntity';
export class WebDesignerMainPageDependencyModel extends BaseModuleEntity<string> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  linkModuleId?: number;
  cmsModuleClassName: string;
  classActionName: string;
}
