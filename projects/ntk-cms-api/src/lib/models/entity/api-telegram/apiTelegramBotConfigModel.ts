import { BaseModuleEntity } from "../base/baseModuleEntity";
import { ApiTelegramLogInputModel } from "./apiTelegramLogInputModel";
import { ApiTelegramLogOutputModel } from "./apiTelegramLogOutputModel";

export class ApiTelegramBotConfigModel extends BaseModuleEntity<number>{
  Title: string;
  Username: string;
  BotToken: string;
  SecurityKey: string;
  UrlWebhook: string;
  StatusWebhook?: boolean;
  LinkUniversalMenuIdOnUndetectableKey?: number;
  LinkUniversalMenuId?: number;
  LinkQRCodeImageId?: number;
  StatisticsMemberCount?: number;
  LogInputs: ApiTelegramLogInputModel[];
  LogOutputs: ApiTelegramLogOutputModel[];
  UrlViewContent: string;
  UrlViewContentQRCodeBase64: string;
}
