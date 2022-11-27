import { EnumBuildStatusType } from '../../enums/base/enumBuildStatusType';
import { EnumLanguage } from '../../enums/base/enumLanguage';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { GetPropertiesInfoModel } from '../base/fieldInfo/getPropertiesInfoModel';
import { ApplicationLayoutValueModel } from './applicationLayoutValueModel';
import { ApplicationSourceModel } from './applicationSourceModel';
import { ApplicationThemeConfigModel } from './applicationThemeConfigModel';
//@@tag-Version-2201011
export class ApplicationAppModel extends BaseModuleEntity<number>  {
  appKey: string;
  lang: EnumLanguage;
  expireDate?: Date;
  linkFileIdIcon?: number;
  linkFileIdLogo?: number;
  linkFileIdSplashScreen?: number;
  linkMainImageId?: number;

  title: string;
  description: string;
  appVersion: number;
  isPublished: boolean;
  linkSourceId: number;
  // tslint:disable-next-line: variable-name
  virtual_Source: ApplicationSourceModel;
  source: ApplicationSourceModel;
  downloadCount: number;
  isGlobalUser: boolean;
  checkUpdate: boolean;
  forceUpdate: boolean;
  allowDirectShareApp: boolean;
  lastBuildAppKey: string;
  lastBuildStatus: EnumBuildStatusType;
  lastNotificationOrderDate?: Date;
  lastBuildOrderDate?: Date;
  lastBuildRunDate?: Date;
  lastBuildEndDate?: Date;
  lastBuildErrorMessage: string;
  lastSuccessfullyBuildDate?: Date;
  layoutValues: ApplicationLayoutValueModel[];
  buildCount?: number;
  linkThemeConfigId: number;
  // tslint:disable-next-line: variable-name
  virtual_ThemeConfig: ApplicationThemeConfigModel;
  themeConfig: ApplicationThemeConfigModel;
  configBuilderAdminJsonValues: string;
  configRuntimeAdminJsonValues: string;
  configBuilderSiteJsonValues: string;
  configRuntimeSiteJsonValues: string;
  scoreClick: number;
  scoreSumPercent: number;
  adminConfigFormFormatter: GetPropertiesInfoModel[];
  userConfigFormFormatter: GetPropertiesInfoModel[];
  themeConfigJsonValues: string;
  buildKey1String: string;
  buildKey1Value: string;
  buildKey1Files: string;

  buildKey2String: string;
  buildKey2Value: string;
  buildKey2Files: string;

  buildKey3String: string;
  buildKey3Value: string;
  buildKey3Files: string;

  buildKey4String: string;
  buildKey4Value: string;
  buildKey4Files: string;

  buildKey5String: string;
  buildKey5Value: string;
  buildKey5Files: string;

  downloadLinkSrcCustomize: string;
  downloadLinkSrc: string;
  downloadLinkUpdateSrc: string;
  downloadLinkSrcQRCodeBase64: string;
  linkFileIdSplashScreenSrc: string;
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
  aboutUsPrivacyPolicyHtmlBody: string;
  /*
  AboutUs
    */
  linkFileIdIconSrc: string;
  linkFileIdLogoSrc: string;
  linkMainImageIdSrc: string;

}
