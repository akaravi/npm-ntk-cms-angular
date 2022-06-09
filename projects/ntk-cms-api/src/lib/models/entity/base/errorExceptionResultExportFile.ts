import { ErrorExceptionResultBase } from './errorExceptionResultBase';

export class ErrorExceptionResultExportFile extends ErrorExceptionResultBase {
  status = 0;
  isSuccess = true;
  errors: any; // Map<string, Array<string>>;
  errorMessage: string;
  totalRowCount: number;
  linkFile: string;
}
