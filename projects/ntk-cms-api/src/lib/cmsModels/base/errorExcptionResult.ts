import { AccessModel } from './accessModel';
import { ErrorExcptionResultBase } from './errorExcptionResultBase';
import { FieldInfoModel } from './fieldInfo/fieldInfoModel';

export class ErrorExcptionResult<T> extends ErrorExcptionResultBase {
  ListItems: T[];
  Item: T;
  CurrentPageNumber: number;
  TotalRowCount: number;
  RowPerPage: number;
  Access: AccessModel = new AccessModel();
}
