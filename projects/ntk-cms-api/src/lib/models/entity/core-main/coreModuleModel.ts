import { BaseEntity } from '../base/baseEntity';
export class CoreModuleModel extends BaseEntity<number>{
  Title: string;
  TitleML: string;
  TitleResourceLanguage?: any;
  ClassName: string;
  NeedSiteCreditAccount:boolean;
  NeedSiteUserCreditAccount:boolean;
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
  LinkMainImageId: number;
  LinkMainImageIdSrc: string;
  ShowInOrder: number;
}
