import { BaseModuleEntity } from '../base/baseModuleEntity';

export class ApplicationAppModel extends BaseModuleEntity<number>  {


  linkSiteId: number;
  appKey: string;
  expireDate?: string;
  linkFileIdIcon?: number;
  icon: FileContentModel;
  linkFileIdLogo?: number;
  logo: FileContentModel;
  linkFileIdSplashScreen?: number;
  splashScreen: FileContentModel;
  title: string;
  appVersion: number;
  isPublished: boolean;
  linkSourceId: number;
  virtual_Source: ApplicationSourceModel;
  source: ApplicationSourceModel;
  downloadCount: number;
  isGlobalUser: boolean;
  checkUpdate: boolean;
  forceUpdate: boolean;
  qrCode: string;
  lastBuildAppKey: string;
  lastBuildStatus: EnumBuildStatusType;
  lastNotificationOrderDate?: string;
  lastBuildOrderDate?: string;
  lastBuildRunDate?: string;
  lastBuildEndDate?: string;
  lastBuildErrorMessage: string;
  lastSuccessfullyBuildDate?: string;
  layoutValues: ApplicationLayoutValueModel[];
  buildCount?: number;
  linkThemeConfigId: number;
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
  buildKey2String: string;
  buildKey2Value: string;
  buildKey3String: string;
  buildKey3Value: string;
  buildKey4String: string;
  buildKey4Value: string;
  buildKey5String: string;
  buildKey5Value: string;
  downloadLinkSrcCustomize: string;
  downloadLinksrc: string;
  downloadLinksrcByDomain: string;
  filePathOnServer: string;

}
