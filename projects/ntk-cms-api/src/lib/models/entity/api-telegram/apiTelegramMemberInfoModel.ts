import { BaseModuleEntity } from "../base/baseModuleEntity";
import { ApiTelegramBotConfigModel } from "./apiTelegramBotConfigModel";

export class ApiTelegramMemberInfoModel extends BaseModuleEntity<number>{
  LinkUserId?: Number;
  LinkMemberId?: Number;
  ChatId: number;
  LinkBotConfigId?: number;
  virtual_BotConfig: ApiTelegramBotConfigModel;
  BotConfig: ApiTelegramBotConfigModel;
}
