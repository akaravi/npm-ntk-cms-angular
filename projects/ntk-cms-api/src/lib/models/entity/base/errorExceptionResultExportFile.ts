import { ErrorExceptionResultBase } from './errorExceptionResultBase';

export class ErrorExceptionResultExportFile extends ErrorExceptionResultBase {
  Status = 0;
  IsSuccess = true;
  errors: any; // Map<string, Array<string>>;
  ErrorMessage: string;
  TotalRowCount: number;
  LinkFile: string;

}
