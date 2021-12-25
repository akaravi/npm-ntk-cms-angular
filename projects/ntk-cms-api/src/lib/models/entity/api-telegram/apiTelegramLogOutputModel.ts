import { EnumMessageType } from "../../enums/api-telegram/enumMessageType";
import { BaseModuleEntity } from "../base/baseModuleEntity";

export class ApiTelegramLogOutputModel extends BaseModuleEntity<string>{
  ChatId: number;
  LinkLogInput?: number;
  MessageType: EnumMessageType;
  LinkUniversalProcessId: number;
  LinkUniversalProcessIdFollowAnswer?: number;
  LinkUniversalMenuId?: number;
  LinkUniversalMenuIdLevel?: number;
  LinkBotConfigId: number;
  ContentMessage: string;
  ContentResult: string;
  ExpectReply: boolean;
  Parameters: string;
}
