import { AccessModel } from './accessModel';
import { ErrorExceptionResultBase } from './errorExceptionResultBase';

export class ErrorExceptionResult<T> extends ErrorExceptionResultBase {
  listItems: T[];
  item: T;
  currentPageNumber: number;
  rowPerPage: number;
  access: AccessModel = new AccessModel();
}
