import { AccessModel } from './accessModel';
import { ErrorExceptionResultBase } from './errorExceptionResultBase';

export class ErrorExceptionResult<T> extends ErrorExceptionResultBase {
  ListItems: T[];
  Item: T;
  CurrentPageNumber: number;
  RowPerPage: number;
  Access: AccessModel = new AccessModel();
}
