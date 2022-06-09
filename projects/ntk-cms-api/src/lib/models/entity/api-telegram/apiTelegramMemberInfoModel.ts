import { BaseModuleEntity } from "../base/baseModuleEntity";
import { ApiTelegramBotConfigModel } from "./apiTelegramBotConfigModel";

export class ApiTelegramMemberInfoModel extends BaseModuleEntity<number>{
  linkUserId?: Number;
  linkMemberId?: Number;
  chatId: number;
  linkBotConfigId?: number;
  virtual_BotConfig: ApiTelegramBotConfigModel;
  botConfig: ApiTelegramBotConfigModel;
}
