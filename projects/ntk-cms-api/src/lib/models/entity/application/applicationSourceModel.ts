import { OperatingSystemTypeEnum } from '../../enums/base/operatingSystemTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationLayoutModel } from './applicationLayoutModel';
import { ApplicationSourceSiteCategoryModel } from './applicationSourceSiteCategoryModel';
//@@tag-Version-2201011
export class ApplicationSourceModel extends BaseModuleEntity<number>  {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  linkMainImageId?: number;
  defaultAppId?: number;
  className: string;
  packageName: string;
  forceUpdate: boolean;
  linkLastSuccessfullyBuildFileId?: number;
  lastSuccessfullyBuildDate?: string;
  lastBuildCommandDate?: string;
  lastBuildCommandBy?: string;
  lastUnsuccessfullyBuildErrorDate?: string;
  lastUnsuccessfullyBuildErrorMessage: string;
  layouts: ApplicationLayoutModel[];
  applications: ApplicationAppModel[];
  sourceSiteCategores: ApplicationSourceSiteCategoryModel[];
  fireBaseServerKey: string;
  extension: string;
  extensionUpdateFile: string;
  defaultConfigBuilderAdminJsonValues: string;
  defaultConfigRuntimeAdminJsonValues: string;
  defaultConfigBuilderSiteJsonValues: string;
  defaultConfigRuntimeSiteJsonValues: string;
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
  isPublish: boolean;
  sourceNameGit: string;
  osType: OperatingSystemTypeEnum;
  updateSourceByGit: boolean;
  isAbilityGradleBuild: boolean;
  linkMainImageIdSrc: string;
}
