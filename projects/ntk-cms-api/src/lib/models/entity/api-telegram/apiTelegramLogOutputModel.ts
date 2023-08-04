import { MessageTypeEnum } from "../../enums/api-telegram/messageTypeEnum";
import { BaseModuleEntity } from "../base/baseModuleEntity";
//@@tag-Version-2201011
export class ApiTelegramLogOutputModel extends BaseModuleEntity<string>{
  chatId: number;
  linkLogInput?: number;
  messageType: MessageTypeEnum;
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
