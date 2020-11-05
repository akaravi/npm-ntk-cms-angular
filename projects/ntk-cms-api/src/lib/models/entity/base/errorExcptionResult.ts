import { AccessModel } from './accessModel';
import { ErrorExcptionResultBase } from './errorExcptionResultBase';

export class ErrorExcptionResult<T> extends ErrorExcptionResultBase {
  ListItems: T[];
  Item: T;
  CurrentPageNumber: number;
  TotalRowCount: number;
  RowPerPage: number;
  Access: AccessModel = new AccessModel();
}
