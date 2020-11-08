import { EnumNotificationType } from './../../enums/enumNotificationType';
export class RenderModelApplicationSendNotificationInput {
    appId: number;
    linkMemberIds: string[];
    Title: string;
    content: string;
    contentJson: string;
    contentType: EnumNotificationType;
    smallImageId?: number;
    bigImageId?: number;
}

