import { BaseEntity } from '../base/baseEntity';
import { CoreSiteCategoryModel } from './coreSiteCategoryModel';
import { CoreSiteUserModel } from './coreSiteUserModel';
import { CoreModuleSiteModel } from './coreModuleSiteModel';
import { CoreSiteDomainAliasModel } from './coreSiteDomainAliasModel';
import { CoreDeviceModel } from './coreDeviceModel';
import { EnumSiteStatus } from '../../enums/base/enumSiteStatus';
import { EnumLanguage } from '../../enums/base/enumLanguage';
import { Data } from '@angular/router';

export class CoreSiteModel extends BaseEntity<number> {
  currentSiteDomainUrl: string;
  mainImageSrc: string;

  expireDate?: Date;
  linkCreatedBySiteId?: number;
  // tslint:disable-next-line: variable-name
  virtual_ParentCreator: CoreSiteModel;
  parentCreator: CoreSiteModel;
  title: string;
  copyright: string;
  ownerSiteSetStatus: EnumSiteStatus;
  userLanguage: EnumLanguage;
  subDomain: string;
  domain: string;
  ssl: boolean;
  redirect: string;
  linkFavIconId?: number;
  linkFavIconIdSrc: string;
  linkImageLogoId?: number;
  linkImageLogoIdSrc: string;
  linkSiteCategoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsSiteCategory: CoreSiteCategoryModel;
  cmsSiteCategory: CoreSiteCategoryModel;
  hasAccountingForm: boolean;
  viewInCmsSiteList: boolean;
  accountingFormNo: number;
  accountingFormCreatedDate?: Date;
  accountingFormUpdatedDate?: Date;
  accountingMemo: string;
  adminSiteMemo: string;
  adminMainMemo: string;
  siteUsers: CoreSiteUserModel[];
  moduleSites: CoreModuleSiteModel[];
  domainAliases: CoreSiteDomainAliasModel[];
  childernCreateds: CoreSiteModel[];
  devices: CoreDeviceModel[];
  configNeshanMapApiKey: string;
  linkResellerSiteId?: number;
  linkResellerUserId?: number;
  /*
 Pwa
   */
    pwaName: string;
pwaShortName: string;
  pwaDescription: string;
  pwaDisplay: string;
  pwaThemeColor: string;
  pwaThemeBackgroundColor: string;
  pwaIconSize190x192Id?: number;
  pwaIconSize190x192IdSrc: string;
  pwaIconSize512x512Id?: number;
  pwaIconSize512x512IdSrc: string;
  pwaNotifySubject: string;
  pwaNotifyPublicKey: string;
  pwaNotifyPrivateKey: string;
  /*
   FCM
  */
  firebaseApiKey: string;
  firebaseAuthDomain: string;
  firebaseDatabaseURL: string;
  firebaseProjectId: string;
  firebaseStorageBucket: string;
  firebaseMessagingSenderId: string;
  firebaseAppId: string;

  /*
  AboutUs
    */
  aboutUsTitle: string;
  aboutUsDescription: string;
  aboutUsTel: string;
  aboutUsMobile: string;
  aboutUsFax: string;
  aboutUsEmail: string;
  aboutUsAddress: string;
  aboutUsMoreInfoUrl: string;
  aboutUsLinkImageId?: number;
  aboutUsLinkImageIdSrc: string;
  aboutUsGeolocationlatitude: number;
  aboutUsGeolocationlongitude: number;
  aboutUsLinkFacebook: string;
  aboutUsLinkTwitter: string;
  aboutUsLinkGooglePlus: string;
  aboutUsLinkInstagram: string;
  aboutUsLinkWhatsapp: string;
  aboutUsLinklinkedin: string;
  aboutUsLinkYahoo: string;
  aboutUsLinkYoutube: string;
  aboutUsLinkTelegram: string;
  aboutUsLinkPinterest: string;
  aboutUsLinkRss: string;
  aboutUsLinkCompanyAuthorSite: string;
  aboutUsLinkCompanyPublisherSite: string;
  aboutUsPrivacyPolicyHtmlBody: string;

  /*
  AboutUs
    */
  /*
  SEO
  */
  seoKeyword: string;
  seoDescription: string;
  seoGoogleAnalytics: string;
  seoGoogleHTMLtag: string;
  seoTwitterCardSite: string;
  seoTwitterCardCreator: string;
  /*
   SEO
   */
}

