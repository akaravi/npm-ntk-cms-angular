import { EnumFileType } from "../../enums/api-telegram/enumFileType";
import { BaseModuleEntity } from "../base/baseModuleEntity";

export class ApiTelegramUploadedFileModel extends BaseModuleEntity<number>{
  linkFileId?: Number;
  fileType: EnumFileType;
  telegramFileId: string;
  linkBotConfigId: number;
}
