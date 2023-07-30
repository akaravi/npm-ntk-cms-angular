import { CmsNotificationModel } from "./cmsNotificationModel";

export class CmsNotificationSendDtoModel extends CmsNotificationModel {
  sendToAll: boolean;
  sendToLinkSiteIds: number[];
  sendToLinkAppIds: number[];
  sendToLinkUserIds: number[];
  sendToLinkTokenNotificationIds: string[];
  sendToDeviceIds: string[];
}
