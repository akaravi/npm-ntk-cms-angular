import { NotificationConnectionTypeEnum } from "../../enums/base/notificationConnectionTypeEnum";
import { CmsNotificationModel } from "./cmsNotificationModel";

export class CmsNotificationSendDtoModel extends CmsNotificationModel {
  sendToConnectionType:NotificationConnectionTypeEnum[]
  sendToAll: boolean;
  sendToLinkSiteIds: number[];
  sendToLinkAppIds: number[];
  sendToLinkUserIds: number[];
  sendToLinkTokenNotificationIds: string[];
  sendToDeviceIds: string[];
}
