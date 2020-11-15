import { EnumBuildStatusType } from '../../enums/enumBuildStatusType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { GetPropertiesInfoModel } from '../base/fieldInfo/getPropertiesInfoModel';
import { ApplicationLayoutValueModel } from './applicationLayoutValueModel';
import { ApplicationSourceModel } from './applicationSourceModel';
import { ApplicationThemeConfigModel } from './applicationThemeConfigModel';

export class ApplicationAppModel extends BaseModuleEntity<number>  {
  AppKey: string;
  ExpireDate?: string;
  LinkFileIdIcon?: number;
  LinkFileIdLogo?: number;
  LinkFileIdSplashScreen?: number;

  Title: string;
  AppVersion: number;
  IsPublished: boolean;
  LinkSourceId: number;
  // tslint:disable-next-line: variable-name
  virtual_Source: ApplicationSourceModel;
  Source: ApplicationSourceModel;
  DownloadCount: number;
  IsGlobalUser: boolean;
  CheckUpdate: boolean;
  ForceUpdate: boolean;
  QrCode: string;
  LastBuildAppKey: string;
  LastBuildStatus: EnumBuildStatusType;
  LastNotificationOrderDate?: string;
  LastBuildOrderDate?: string;
  LastBuildRunDate?: string;
  LastBuildEndDate?: string;
  LastBuildErrorMessage: string;
  LastSuccessfullyBuildDate?: string;
  LayoutValues: ApplicationLayoutValueModel[];
  BuildCount?: number;
  LinkThemeConfigId: number;
  // tslint:disable-next-line: variable-name
  virtual_ThemeConfig: ApplicationThemeConfigModel;
  ThemeConfig: ApplicationThemeConfigModel;
  ConfigBuilderAdminJsonValues: string;
  ConfigRuntimeAdminJsonValues: string;
  ConfigBuilderSiteJsonValues: string;
  ConfigRuntimeSiteJsonValues: string;
  ScoreClick: number;
  ScoreSumPercent: number;
  AdminConfigFormFormatter: GetPropertiesInfoModel[];
  UserConfigFormFormatter: GetPropertiesInfoModel[];
  ThemeConfigJsonValues: string;
  BuildKey1String: string;
  BuildKey1Value: string;
  BuildKey2String: string;
  BuildKey2Value: string;
  BuildKey3String: string;
  BuildKey3Value: string;
  BuildKey4String: string;
  BuildKey4Value: string;
  BuildKey5String: string;
  BuildKey5Value: string;
  DownloadLinkSrcCustomize: string;
  DownloadLinksrc: string;
  DownloadLinksrcByDomain: string;
  FilePathOnServer: string;
  LinkFileIdIconSrc: string;
  LinkFileIdLogoSrc: string;
  LinkFileIdSplashScreenSrc: string;
}
