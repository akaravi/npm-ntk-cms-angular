import { NotificationTypeEnum } from '../../enums/base/notificationTypeEnum';
export class RenderModelApplicationSendNotificationInput {
    appId: number;
    linkMemberIds: string[];
    title: string;
    content: string;
    contentJson: string;
    contentType: NotificationTypeEnum;
    smallImageId?: number;
    bigImageId?: number;
}

