import { BaseEntity } from '../base/baseEntity';
import { CoreSiteCategoryModel } from './coreSiteCategoryModel';
import { CoreSiteUserModel } from './coreSiteUserModel';
import { CoreModuleSiteModel } from './coreModuleSiteModel';
import { CoreSiteDomainAliasModel } from './coreSiteDomainAliasModel';
import { CoreDeviceModel } from './coreDeviceModel';
import { EnumSiteStatus } from '../../enums/enumSiteStatus';
import { EnumLanguage } from '../../enums/enumLanguage';

export class CoreSiteModel extends BaseEntity<number> {
  CurrentSiteDomainUrl: string;
  MainImageSrc: string;

  ExpireDate?: Date;
  linkCreatedBySiteId?: number;
  // tslint:disable-next-line: variable-name
  virtual_ParentCreator: CoreSiteModel;
  ParentCreator: CoreSiteModel;
  Title: string;
  Copyright: string;
  OwnerSiteSetStatus: EnumSiteStatus;
  UserLanguage: EnumLanguage;
  SubDomain: string;
  Domain: string;
  SSL: boolean;
  Redirect: string;
  LinkFavIconId?: number;
  LinkFavIconIdSrc: string;
  LinkImageLogoId?: number;
  LinkImageLogoIdSrc: string;
  LinkSiteCategoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsSiteCategory: CoreSiteCategoryModel;
  CmsSiteCategory: CoreSiteCategoryModel;
  HasAccountingForm: boolean;
  ViewInCmsSiteList: boolean;
  AccountingFormNo: number;
  AccountingFormCreatedDate?: string;
  AccountingFormUpdatedDate?: string;
  SiteUsers: CoreSiteUserModel[];
  ModuleSites: CoreModuleSiteModel[];
  DomainAliases: CoreSiteDomainAliasModel[];
  ChildernCreateds: CoreSiteModel[];
  Devices: CoreDeviceModel[];

  LinkResellerSiteId?: number;
  LinkResellerUserId?: number;
  /*
  AboutUs
    */
  AboutUsTitle: string;
  AboutUsDescription: string;
  AboutUsTel: string;
  AboutUsMobile: string;
  AboutUsFax: string;
  AboutUsEmail: string;
  AboutUsAddress: string;
  AboutUsMoreInfoUrl: string;
  AboutUsLinkImageId?: number;
  AboutUsLinkImageIdSrc: string;
  AboutUsGeolocationlatitude: number;
  AboutUsGeolocationlongitude: number;
  AboutUsLinkFacebook: string;
  AboutUsLinkTwitter: string;
  AboutUsLinkGooglePlus: string;
  AboutUsLinkInstagram: string;
  AboutUsLinkWhatsapp: string;
  AboutUsLinklinkedin: string;
  AboutUsLinkYahoo: string;
  AboutUsLinkYoutube: string;
  AboutUsLinkTelegram: string;
  AboutUsLinkPinterest: string;
  AboutUsLinkRss: string;
  /*
  AboutUs
    */
  /*
  SEO
  */
  SeoKeyword: string;
  SeoDescription: string;
  SeoGoogleAnalytics: string;
  SeoGoogleHTMLtag: string;
  /*
   SEO
   */
}

