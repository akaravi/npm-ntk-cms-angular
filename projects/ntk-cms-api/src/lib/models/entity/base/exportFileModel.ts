import { EnumExportFileType } from '../../enums/base/exportFileTypeEnum';
import { EnumExportReceiveMethod } from '../../enums/base/exportReceiveMethodEnum';
//@@tag-Version-2201011
export class ExportFileModel {
  fileType: EnumExportFileType;
  recieveMethod: EnumExportReceiveMethod;
  reportFormatFileId: string;
}
