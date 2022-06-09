import { BaseEntity } from '../base/baseEntity';
export class CoreModuleModel extends BaseEntity<number>{
  title: string;
  titleML: string;
  titleResourceLanguage?: any;
  className: string;
  needSiteCreditAccount:boolean;
  needSiteUserCreditAccount:boolean;
  description: string;
  administratorIsActivate: boolean;
  moduleConfigAdminMainJson?: any;
  moduleConfigSiteAccessDefaultJson?: any;
  moduleConfigSiteDefaultJson?: any;
  moduleSites?: any;
  cmsCpMainMenu?: any;
  cmsModuleProcess?: any;
  cmsSiteCategoryCmsModule?: any;
  ruleHtmlBody: string;
  linkMainImageId: number;
  linkMainImageIdSrc: string;
  showInOrder: number;
}
