import { EnumFileType } from "../../enums/api-telegram/enumFileType";
import { BaseModuleEntity } from "../base/baseModuleEntity";

export class ApiTelegramReceivedFileModel extends BaseModuleEntity<number>{
  LinkFileId?: Number;
  FileType: EnumFileType;
  TelegramFileId: string;
  LinkBotConfigId: number;
  LinkMemberId: number;
}
