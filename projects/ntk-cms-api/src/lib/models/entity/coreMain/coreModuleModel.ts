import { BaseEntity } from '../base/baseEntity';
export class CoreModuleModel extends BaseEntity<number>{
  Title: string;
  TitleML: string;
  TitleResourceLanguage?: any;
  ClassName: string;
  Description: string;
  AdministratorIsActivate: boolean;
  ModuleConfigAdminMainJson?: any;
  ModuleConfigAdminMainJsonForm?: any;
  ModuleConfigSiteAccessDefaultJson?: any;
  ModuleConfigSiteAccessJsonFrom?: any;
  ModuleConfigSiteDefaultJson?: any;
  ModuleConfigSiteJsonForm?: any;
  ModuleSiteStorageValuesJsonForm?: any;
  ModuleSites?: any;
  CmsCpMainMenu?: any;
  CmsModuleProcess?: any;
  CmsSiteCategoryCmsModule?: any;
}
