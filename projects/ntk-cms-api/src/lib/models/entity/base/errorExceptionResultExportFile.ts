import { ErrorExceptionResultBase } from './errorExceptionResultBase';
//@@tag-Version-2201011
export class ErrorExceptionResultExportFile extends ErrorExceptionResultBase {
  status = 0;
  isSuccess = true;
  errors: any; // Map<string, Array<string>>;
  errorMessage: string;
  totalRowCount: number;
  linkFile: string;
}
