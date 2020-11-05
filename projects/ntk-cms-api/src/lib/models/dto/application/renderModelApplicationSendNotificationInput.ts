import { EnumNotificationType } from './../../enums/enumNotificationType';
export class RenderModelApplicationSendNotificationInput {
    appId: number;
    linkMemberIds: string[];
    title: string;
    content: string;
    contentJson: string;
    contentType: EnumNotificationType;
    smallImageId?: number;
    bigImageId?: number;
}

