import { ManageUserAccessAreaTypesEnum } from "../../enums/base/manageUserAccessAreaTypesEnum";
import { ManageUserAccessUserTypesEnum } from "../../enums/base/manageUserAccessUserTypesEnum";
import { ConnectionTypeEnum } from "../../enums/base/connectionTypeEnum";
import { CmsNotificationModel } from "./cmsNotificationModel";

export class CmsNotificationSendDtoModel extends CmsNotificationModel {
  sendToConnectionType: ConnectionTypeEnum[]
  sendToAll: boolean;
  sendToLinkSiteIds: number[];
  sendToLinkAppIds: number[];
  sendToLinkUserIds: number[];
  sendToLinkTokenConnectionIds: string[];
  sendToDeviceIds: string[];
  SendToUserTypes: ManageUserAccessUserTypesEnum[]
  SendToAreaTypes: ManageUserAccessAreaTypesEnum[]
}
