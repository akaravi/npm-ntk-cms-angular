import { NotificationTypeEnum } from '../../enums/base/notificationTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationMemberInfoModel } from './applicationMemberInfoModel';
//@@tag-Version-2201011
export class ApplicationLogNotificationModel extends BaseModuleEntity<string> {
    linkApplicationMemberId: string;
    memberInfo: ApplicationMemberInfoModel;
    linkApplicationId?: number;
    application: ApplicationAppModel;
    title: string;
    content: string;
    contentType: NotificationTypeEnum;
    contentJson: string;
    contentJsonClass: string;
    smallImageId: number;
    bigImageId: number;
    smallImageIdSrc: string;
    bigImageIdSrc: string;
    errorMessage: string;

}
