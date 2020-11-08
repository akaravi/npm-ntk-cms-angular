import { BaseEntity } from '../base/baseEntity';
import { CoreSiteCategoryModel } from './coreSiteCategoryModel';
import { CoreSiteUserModel } from './coreSiteUserModel';
import { CoreModuleSiteModel } from './coreModuleSiteModel';
import { CoreSiteDomainAliasModel } from './coreSiteDomainAliasModel';
import { CoreDeviceModel } from './coreDeviceModel';
import { EnumSiteStatus } from '../../Enums/enumSiteStatus';

export class CoreSiteModel extends BaseEntity<number> {
  CurrentSiteDomainUrl: string;
  MainImageSrc: string;

  expireDate?: string;
  linkCreatedBySiteId?: number;
  // tslint:disable-next-line: variable-name
  virtual_ParentCreator: CoreSiteModel;
  parentCreator: CoreSiteModel;
  title: string;
  ownerSiteSetStatus: EnumSiteStatus;
  userLanguage: number;
  subDomain: string;
  domain: string;
  redirect: string;
  keyword: string;
  description: string;
  linkFavIconId?: number;
  linkSiteCategoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsSiteCategory: CoreSiteCategoryModel;
  cmsSiteCategory: CoreSiteCategoryModel;
  hasAccountingForm: boolean;
  viewInCmsSiteLIst: boolean;
  accountingFormNo: number;
  accountingFormCreatedDate?: string;
  accountingFormUpdatedDate?: string;
  siteUsers: CoreSiteUserModel[];
  moduleSites: CoreModuleSiteModel[];
  domainAliases: CoreSiteDomainAliasModel[];
  childernCreateds: CoreSiteModel[];
  devices: CoreDeviceModel[];
  copyright: string;
  webMasterEmail: string;
  webEditorEmail: string;


}

