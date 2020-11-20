import { BaseEntity } from '../base/baseEntity';
import { CoreSiteCategoryModel } from './coreSiteCategoryModel';
import { CoreSiteUserModel } from './coreSiteUserModel';
import { CoreModuleSiteModel } from './coreModuleSiteModel';
import { CoreSiteDomainAliasModel } from './coreSiteDomainAliasModel';
import { CoreDeviceModel } from './coreDeviceModel';
import { EnumSiteStatus } from '../../enums/enumSiteStatus';

export class CoreSiteModel extends BaseEntity<number> {
  CurrentSiteDomainUrl: string;
  MainImageSrc: string;

  ExpireDate?: Date;
  linkCreatedBySiteId?: number;
  // tslint:disable-next-line: variable-name
  virtual_ParentCreator: CoreSiteModel;
  ParentCreator: CoreSiteModel;
  Title: string;
  OwnerSiteSetStatus: EnumSiteStatus;
  UserLanguage: number;
  SubDomain: string;
  Domain: string;
  Redirect: string;
  Keyword: string;
  Description: string;
  LinkFavIconId?: number;
  LinkSiteCategoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsSiteCategory: CoreSiteCategoryModel;
  CmsSiteCategory: CoreSiteCategoryModel;
  HasAccountingForm: boolean;
  ViewInCmsSiteLIst: boolean;
  AccountingFormNo: number;
  AccountingFormCreatedDate?: string;
  AccountingFormUpdatedDate?: string;
  SiteUsers: CoreSiteUserModel[];
  ModuleSites: CoreModuleSiteModel[];
  DomainAliases: CoreSiteDomainAliasModel[];
  ChildernCreateds: CoreSiteModel[];
  Devices: CoreDeviceModel[];
  Copyright: string;

}

