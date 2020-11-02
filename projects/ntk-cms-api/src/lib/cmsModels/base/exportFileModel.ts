import { EnumExportReceiveMethod } from '../Enums/enumExportReceiveMethod';
import { EnumExportFileType } from '../Enums/enumExportFileType';


export class ExportFileModel {
  FileType: EnumExportFileType;
  RecieveMethod: EnumExportReceiveMethod;
  RowCount: number;
}
