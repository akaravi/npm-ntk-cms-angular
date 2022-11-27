import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class WebDesignerMainPageDependencyModel extends BaseModuleEntity<string> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  linkModuleId?: number;
  cmsModuleClassName: string;
  classActionName: string;
}
