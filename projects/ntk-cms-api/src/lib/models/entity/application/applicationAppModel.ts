import { EnumBuildStatusType } from '../../enums/enumBuildStatusType';
import { EnumLanguage } from '../../enums/enumLanguage';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { GetPropertiesInfoModel } from '../base/fieldInfo/getPropertiesInfoModel';
import { ApplicationLayoutValueModel } from './applicationLayoutValueModel';
import { ApplicationSourceModel } from './applicationSourceModel';
import { ApplicationThemeConfigModel } from './applicationThemeConfigModel';

export class ApplicationAppModel extends BaseModuleEntity<number>  {
  AppKey: string;
  Lang: EnumLanguage;
  ExpireDate?: Date;
  LinkFileIdIcon?: number;
  LinkFileIdLogo?: number;
  LinkFileIdSplashScreen?: number;
  LinkMainImageId?: number;

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

  LastBuildAppKey: string;
  LastBuildStatus: EnumBuildStatusType;
  LastNotificationOrderDate?: Date;
  LastBuildOrderDate?: Date;
  LastBuildRunDate?: Date;
  LastBuildEndDate?: Date;
  LastBuildErrorMessage: string;
  LastSuccessfullyBuildDate?: Date;
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
  DownloadLinkSrc: string;
  DownloadLinkUpdateSrc: string;
  DownloadLinkSrcByDomainQRCodeBase64: string;
  LinkFileIdSplashScreenSrc: string;
  AboutUsTitle: string;
  AboutUsDescription: string;
  AboutUsTel: string;
  AboutUsFax: string;
  AboutUsEmail: string;
  AboutUsAddress: string;
  AboutUsLinkImageId: number;
  AboutUsLinkImageIdSrc: string;
  AboutUsGeolocationlatitude: number;
  AboutUsGeolocationlongitude: number;
  LinkFileIdIconSrc: string;
  LinkFileIdLogoSrc: string;
  LinkMainImageIdSrc: string;

}
