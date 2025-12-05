import { ExportFileDataRowOrientationEnum } from '../../enums/base/exportFileDataRowOrientationEnum';
import { ExportFileTypeEnum } from '../../enums/base/exportFileTypeEnum';
import { ExportReceiveMethodEnum } from '../../enums/base/exportReceiveMethodEnum';
//@@tag-Version-2201011
export class ExportFileModel {
  fileType: ExportFileTypeEnum;
  recieveMethod: ExportReceiveMethodEnum;
  dataRowOrientation: ExportFileDataRowOrientationEnum;
  reportFormatFileId: string;
}
