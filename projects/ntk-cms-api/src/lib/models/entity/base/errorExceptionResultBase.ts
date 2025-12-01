import { ErrorTypeEnum } from "../../enums/base/errorTypeEnum";
import { AccessModel } from "./accessModel";
//@@tag-Version-2201011
export class ErrorExceptionResultBase {
  status = 0;
  isSuccess = true;
  totalRowCount: number;
  errorMessage: string;
  errors: string[];
  warnings: string[];
  errorType: ErrorTypeEnum;
  errorTypeTitle: string;
  access: AccessModel = new AccessModel();
}
