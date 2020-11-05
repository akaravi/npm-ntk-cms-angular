import { EnumNotificationType } from '../../enums/enumNotificationType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationMemberInfoModel } from './applicationMemberInfoModel';

export class ApplicationLogNotificationModel extends BaseModuleEntity<number>  {

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

}
