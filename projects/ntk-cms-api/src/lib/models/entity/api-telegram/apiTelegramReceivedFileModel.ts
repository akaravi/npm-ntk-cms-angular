import { EnumFileType } from "../../enums/api-telegram/fileTypeEnum";
import { BaseModuleEntity } from "../base/baseModuleEntity";
//@@tag-Version-2201011
export class ApiTelegramReceivedFileModel extends BaseModuleEntity<number>{
  linkFileId?: Number;
  fileType: EnumFileType;
  telegramFileId: string;
  linkBotConfigId: number;
  linkMemberId: number;
}
