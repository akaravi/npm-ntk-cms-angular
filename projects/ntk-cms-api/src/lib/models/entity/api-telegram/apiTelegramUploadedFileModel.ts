import { EnumFileType } from "../../enums/api-telegram/enumFileType";
import { BaseModuleEntity } from "../base/baseModuleEntity";

export class ApiTelegramUploadedFileModel extends BaseModuleEntity<number>{
  LinkFileId?: Number;
  FileType: EnumFileType;
  TelegramFileId: string;
  LinkBotConfigId: number;
}
