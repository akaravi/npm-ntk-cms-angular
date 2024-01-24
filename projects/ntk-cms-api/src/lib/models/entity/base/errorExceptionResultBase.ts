import { ErrorTypeEnum } from "../../enums/base/errorTypeEnum";
import { AccessModel } from "./accessModel";
//@@tag-Version-2201011
export class ErrorExceptionResultBase {
  status = 0;
  isSuccess = true;
  errors: any; // Map<string, Array<string>>;
  errorMessage: string;
  totalRowCount: number;
  errorType: ErrorTypeEnum;
  errorTypeTitle: string;
  access: AccessModel = new AccessModel();
}
