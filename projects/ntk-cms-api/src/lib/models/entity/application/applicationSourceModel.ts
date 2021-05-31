import { EnumOperatingSystemType } from '../../enums/enumOperatingSystemType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationLayoutModel } from './applicationLayoutModel';
import { ApplicationSourceSiteCategoryModel } from './applicationSourceSiteCategoryModel';

export class ApplicationSourceModel extends BaseModuleEntity<number>  {
  Title: string;
  TitleML: string;
  TitleResourceLanguage: string;
  LinkMainImageId?: number;
  DefaultAppId?: number;
  ClassName: string;
  PackageName: string;
  ForceUpdate: boolean;
  LinkLastSuccessfullyBuildFileId?: number;
  LastSuccessfullyBuildDate?: string;
  LastBuildCommandDate?: string;
  LastBuildCommandBy?: string;
  LastUnsuccessfullyBuildErrorDate?: string;
  LastUnsuccessfullyBuildErrorMessage: string;
  Layouts: ApplicationLayoutModel[];
  Applications: ApplicationAppModel[];
  SourceSiteCategores: ApplicationSourceSiteCategoryModel[];
  FireBaseServerKey: string;
  Extension: string;
  ExtensionUpdateFile: string;
  DefaultConfigBuilderAdminJsonValues: string;
  DefaultConfigRuntimeAdminJsonValues: string;
  DefaultConfigBuilderSiteJsonValues: string;
  DefaultConfigRuntimeSiteJsonValues: string;
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
  IsPublish: boolean;
  SourceNameGit: string;
  OSType: EnumOperatingSystemType;
  UpdateSourceByGit: boolean;
  IsAbilityGradleBuild: boolean;
  LinkMainImageIdSrc: string;
}
