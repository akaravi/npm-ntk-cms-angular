import { EnumMessageType } from "../../enums/api-telegram/enumMessageType";
import { BaseModuleEntity } from "../base/baseModuleEntity";

export class ApiTelegramLogOutputModel extends BaseModuleEntity<string>{
  chatId: number;
  linkLogInput?: number;
  messageType: EnumMessageType;
  linkUniversalProcessId: number;
  linkUniversalProcessIdFollowAnswer?: number;
  linkUniversalMenuId?: number;
  linkUniversalMenuIdLevel?: number;
  linkBotConfigId: number;
  contentMessage: string;
  contentResult: string;
  expectReply: boolean;
  parameters: string;
}
