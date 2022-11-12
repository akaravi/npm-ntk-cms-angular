import { EnumBuildStatusType } from '../../enums/base/enumBuildStatusType';

export class BuilderInfoStatusDtoModel {
    id: number;
    buildStatusType: EnumBuildStatusType;
    errorMessage: string;
    buildAppKey: string;
    uploadFileGUID: string;
}
