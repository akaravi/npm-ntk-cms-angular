import { LanguageEnum } from '../../enums/base/languageEnum';
import { SiteStatusEnum } from '../../enums/base/siteStatusEnum';
import { BaseEntity } from '../base/baseEntity';
import { CoreDeviceModel } from './coreDeviceModel';
import { CoreModuleSiteModel } from './coreModuleSiteModel';
import { CoreSiteCategoryModel } from './coreSiteCategoryModel';
import { CoreSiteDomainAliasModel } from './coreSiteDomainAliasModel';
import { CoreSiteUserModel } from './coreSiteUserModel';
//@@tag-Version-2201011
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
  ownerSiteSetStatus: SiteStatusEnum;
  userLanguage: LanguageEnum;
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
  pwaIconSize72x72Id?: number;
  pwaIconSize72x72IdSrc: string;
  pwaIconSize192x192Id?: number;
  pwaIconSize192x192IdSrc: string;
  pwaIconSize384x384Id?: number;
  pwaIconSize384x384IdSrc: string;
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
  aboutUsLicensesHtmlBody: string;
  aboutUsSupportHtmlBody: string;
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

