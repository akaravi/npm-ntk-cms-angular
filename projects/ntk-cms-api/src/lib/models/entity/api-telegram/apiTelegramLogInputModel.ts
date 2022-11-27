import { EnumMessageType } from "../../enums/api-telegram/enumMessageType";
import { EnumUpdateType } from "../../enums/api-telegram/enumUpdateType";
import { BaseModuleEntity } from "../base/baseModuleEntity";
//@@tag-Version-2201011
export class ApiTelegramLogInputModel extends BaseModuleEntity<string>{
  chatId: number;
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  updateType: EnumUpdateType;
  messageType: EnumMessageType;
  messageId: string;
  linkBotConfigId: number;
  contentMessage: string;
  captionMessage: string;
}
