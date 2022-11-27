import { BaseModuleEntity } from "../base/baseModuleEntity";
import { ApiTelegramLogInputModel } from "./apiTelegramLogInputModel";
import { ApiTelegramLogOutputModel } from "./apiTelegramLogOutputModel";
//@@tag-Version-2201011
export class ApiTelegramBotConfigModel extends BaseModuleEntity<number>{
  title: string;
  username: string;
  botToken: string;
  securityKey: string;
  urlWebhook: string;
  statusWebhook?: boolean;
  linkUniversalMenuIdOnUndetectableKey?: number;
  linkUniversalMenuId?: number;
  linkQRCodeImageId?: number;
  statisticsMemberCount?: number;
  logInputs: ApiTelegramLogInputModel[];
  logOutputs: ApiTelegramLogOutputModel[];
  urlViewContent: string;
  urlViewContentQRCodeBase64: string;
  hookAddressAPI:string;
  hookAddressAPIById:string;
}
