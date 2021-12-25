import { EnumMessageType } from "../../enums/api-telegram/enumMessageType";
import { EnumUpdateType } from "../../enums/api-telegram/enumUpdateType";
import { BaseModuleEntity } from "../base/baseModuleEntity";

export class ApiTelegramLogInputModel extends BaseModuleEntity<string>{
  ChatId: number;
  UserId: number;
  Username: string;
  FirstName: string;
  LastName: string;
  UpdateType: EnumUpdateType;
  MessageType: EnumMessageType;
  MessageId: string;
  LinkBotConfigId: number;
  ContentMessage: string;
  CaptionMessage: string;
}
