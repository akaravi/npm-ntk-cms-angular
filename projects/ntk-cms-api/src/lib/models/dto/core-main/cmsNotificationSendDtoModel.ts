import { EnumManageUserAccessAreaTypes } from "../../enums/base/enumManageUserAccessAreaTypes";
import { EnumManageUserAccessUserTypes } from "../../enums/base/enumManageUserAccessUserTypes";
import { EnumNotificationConnectionType } from "../../enums/base/enumNotificationConnectionType";
import { CmsNotificationModel } from "./cmsNotificationModel";

export class CmsNotificationSendDtoModel extends CmsNotificationModel {
  sendToConnectionTypes:EnumNotificationConnectionType[]
  sendToAll: boolean;
  sendToLinkSiteIds: number[];
  sendToLinkAppIds: number[];
  sendToLinkUserIds: number[];
  sendToLinkTokenNotificationIds: string[];
  sendToDeviceIds: string[];
  SendToUserTypes:EnumManageUserAccessUserTypes[]
  SendToAreaTypes:EnumManageUserAccessAreaTypes[]
}
