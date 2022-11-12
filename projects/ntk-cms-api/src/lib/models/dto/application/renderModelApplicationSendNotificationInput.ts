import { EnumNotificationType } from '../../enums/base/enumNotificationType';
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

