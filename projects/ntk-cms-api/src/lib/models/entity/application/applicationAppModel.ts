import { EnumBuildStatusType } from '../../enums/enumBuildStatusType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { GetPropertiesInfoModel } from '../base/fieldInfo/getPropertiesInfoModel';
import { ApplicationLayoutValueModel } from './applicationLayoutValueModel';
import { ApplicationSourceModel } from './applicationSourceModel';
import { ApplicationThemeConfigModel } from './applicationThemeConfigModel';

export class ApplicationAppModel extends BaseModuleEntity<number>  {


  linkSiteId: number;
  appKey: string;
  expireDate?: string;
  linkFileIdIcon?: number;
    linkFileIdLogo?: number;
    linkFileIdSplashScreen?: number;

  title: string;
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
