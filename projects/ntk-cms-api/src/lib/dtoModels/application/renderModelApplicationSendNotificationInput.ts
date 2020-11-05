export class RenderModelApplicationSendNotificationInput {
 declare interface RenderModelApplicationSendNotificationInput {
    appId: number;
    linkMemberIds: string[];
    title: string;
    content: string;
    contentJson: string;
    contentType: EnumNotificationType;
    smallImageId?: number;
    bigImageId?: number;
    funcFileDownloadLinksrcByDomain: Func<number, string>;
}
}
