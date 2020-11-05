import { BaseModuleEntity } from '../base/baseModuleEntity';

export class ApplicationSourceModel extends BaseModuleEntity<number>  {
  public string Title { get; set; }

    title: string;
    linkMainImageId?: number;
    defaultAppId?: number;
    className: string;
    packageName: string;
    forceUpdate: Boolean;
    linkLastSuccessfullyBuildFileId?: number;
    lastSuccessfullyBuildDate?: string;
    lastBuildCommandDate?: string;
    lastBuildCommandBy?: string;
    lastUnsuccessfullyBuildErrorDate?: string;
    lastUnsuccessfullyBuildErrorMessage: string;
    layouts: ApplicationLayoutModel[];
    applications: ApplicationAppModel[];
    fireBaseServerKey: string;
    defaultConfigBuilderAdminJsonValues: string;
    defaultConfigRuntimeAdminJsonValues: string;
    defaultConfigBuilderSiteJsonValues: string;
    defaultConfigRuntimeSiteJsonValues: string;
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
    isPublish: Boolean;
    sourceNameGit: string;
    osType: number;
    updateSourceByGit: Boolean;
    isAbilityGradleBuild: boolean;
    filePathOnServer: string;



}
