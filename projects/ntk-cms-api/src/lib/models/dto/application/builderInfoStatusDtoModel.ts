import { EnumBuildStatusType } from '../../enums/base/buildStatusTypeEnum';

export class BuilderInfoStatusDtoModel {
    id: number;
    buildStatusType: EnumBuildStatusType;
    errorMessage: string;
    buildAppKey: string;
    uploadFileGUID: string;
}
