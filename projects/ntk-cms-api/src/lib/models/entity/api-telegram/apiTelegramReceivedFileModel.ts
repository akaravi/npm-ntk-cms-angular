import { EnumFileType } from "../../enums/api-telegram/enumFileType";
import { BaseModuleEntity } from "../base/baseModuleEntity";

export class ApiTelegramReceivedFileModel extends BaseModuleEntity<number>{
  linkFileId?: Number;
  fileType: EnumFileType;
  telegramFileId: string;
  linkBotConfigId: number;
  linkMemberId: number;
}
