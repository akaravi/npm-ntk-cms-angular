import { ErrorTypeEnum } from "../../Enums/errorTypeEnum";

export class ErrorExceptionResultBase {
  status = 0;
  isSuccess = true;
  errors: any; // Map<string, Array<string>>;
  errorMessage: string;
  totalRowCount: number;
  errorType: ErrorTypeEnum;
}
