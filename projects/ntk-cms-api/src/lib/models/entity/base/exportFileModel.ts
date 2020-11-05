import { EnumExportFileType } from '../../enums/enumExportFileType';
import { EnumExportReceiveMethod } from '../../enums/enumExportReceiveMethod';



export class ExportFileModel {
  FileType: EnumExportFileType;
  RecieveMethod: EnumExportReceiveMethod;
  RowCount: number;
}
