import { BaseModuleEntity } from "../base/baseModuleEntity";
//@@tag-Version-2201011
export class ApiTelegramSessionModel extends BaseModuleEntity<string> {
  userId: Number;
  parameters: string;
  linkBotConfigId: number;
}
