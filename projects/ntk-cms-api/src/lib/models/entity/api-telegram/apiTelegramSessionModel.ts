import { BaseModuleEntity } from "../base/baseModuleEntity";

export class ApiTelegramSessionModel extends BaseModuleEntity<string>{
  UserId: Number;
  Parameters: string;
  LinkBotConfigId: number;
}
