import { EnumNotificationType } from '../../enums/base/enumNotificationType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationMemberInfoModel } from './applicationMemberInfoModel';

export class ApplicationLogNotificationModel extends BaseModuleEntity<string>  {
    linkApplicationMemberId: string;
    memberInfo: ApplicationMemberInfoModel;
    linkApplicationId?: number;
    application: ApplicationAppModel;
    title: string;
    content: string;
    contentType: EnumNotificationType;
    contentJson: string;
    contentJsonClass: string;
    smallImageId: number;
    bigImageId: number;
    smallImageIdSrc: string;
    bigImageIdSrc: string;
    errorMessage: string;

}
