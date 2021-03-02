import { EnumNotificationType } from '../../enums/enumNotificationType';
export class RenderModelApplicationSendNotificationInput {
    AppId: number;
    LinkMemberIds: string[];
    Title: string;
    Content: string;
    ContentJson: string;
    ContentType: EnumNotificationType;
    SmallImageId?: number;
    BigImageId?: number;
}

