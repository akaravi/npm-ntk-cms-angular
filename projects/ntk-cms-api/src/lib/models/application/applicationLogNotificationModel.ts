import { BaseModuleEntity } from '../base/baseModuleEntity';

export class ApplicationLogNotificationModel extends BaseModuleEntity<number>  {

    linkApplicationMemberId: ObjectId;
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
