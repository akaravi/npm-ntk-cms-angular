import { BaseEntity } from '../base/baseEntity';
export class CoreModuleModel extends BaseEntity<number>{
  Title: string;
  TitleML: string;
  TitleResourceLanguage?: any;
  ClassName: string;
  Description: string;
  AdministratorIsActivate: boolean;
  ModuleConfigAdminMainJson?: any;
  ModuleConfigSiteAccessDefaultJson?: any;
  ModuleConfigSiteDefaultJson?: any;
  ModuleSites?: any;
  CmsCpMainMenu?: any;
  CmsModuleProcess?: any;
  CmsSiteCategoryCmsModule?: any;
  RuleHtmlBody: string;
}
