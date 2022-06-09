import { BaseModuleEntity } from "../base/baseModuleEntity";

export class ApiTelegramSessionModel extends BaseModuleEntity<string>{
  userId: Number;
  parameters: string;
  linkBotConfigId: number;
}
