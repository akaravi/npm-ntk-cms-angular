import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationLayoutModel } from './applicationLayoutModel';

export class ApplicationSourceModel extends BaseModuleEntity<number>  {
    Title: string;
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
    isPublish: boolean;
    sourceNameGit: string;
    osType: number;
    updateSourceByGit: boolean;
    isAbilityGradleBuild: boolean;
    filePathOnServer: string;



}