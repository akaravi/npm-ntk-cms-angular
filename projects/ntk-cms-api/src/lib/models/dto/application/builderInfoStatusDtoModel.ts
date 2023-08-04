import { BuildStatusTypeEnum } from '../../enums/base/buildStatusTypeEnum';

export class BuilderInfoStatusDtoModel {
    id: number;
    buildStatusType: BuildStatusTypeEnum;
    errorMessage: string;
    buildAppKey: string;
    uploadFileGUID: string;
}
