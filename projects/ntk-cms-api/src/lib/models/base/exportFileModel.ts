import { EnumExportReceiveMethod } from '../enums/enumExportReceiveMethod';
import { EnumExportFileType } from '../enums/enumExportFileType';


export class ExportFileModel {
  FileType: EnumExportFileType;
  RecieveMethod: EnumExportReceiveMethod;
  RowCount: number;
}
