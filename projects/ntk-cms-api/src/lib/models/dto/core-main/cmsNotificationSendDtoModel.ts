import { EnumManageUserAccessAreaTypes } from "../../enums/base/enumManageUserAccessAreaTypes";
import { EnumManageUserAccessUserTypes } from "../../enums/base/enumManageUserAccessUserTypes";
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
  SendToUserTypes:EnumManageUserAccessUserTypes[]
  SendToAreaTypes:EnumManageUserAccessAreaTypes[]
}
