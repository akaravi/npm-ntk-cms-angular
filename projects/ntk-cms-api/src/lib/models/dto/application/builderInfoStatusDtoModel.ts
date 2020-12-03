import { EnumBuildStatusType } from '../../enums/enumBuildStatusType';

export class BuilderInfoStatusDtoModel {

    Id: number;
    BuildStatusType: EnumBuildStatusType;
    ErrorMessage: string;
    BuildAppKey: string;
    UploadFileKey: string;

}
