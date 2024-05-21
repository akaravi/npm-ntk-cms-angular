import { FileTypeEnum } from "../../enums/api-telegram/fileTypeEnum";
import { BaseModuleEntity } from "../base/baseModuleEntity";
//@@tag-Version-2201011
export class ApiTelegramUploadedFileModel extends BaseModuleEntity<number> {
  linkFileId?: Number;
  fileType: FileTypeEnum;
  telegramFileId: string;
  linkBotConfigId: number;
}
