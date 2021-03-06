export class ErrorExceptionResultBase {
  Status = 0;
  IsSuccess = true;
  errors: any; // Map<string, Array<string>>;
  ErrorMessage: string;
  TotalRowCount: number;
}
