import { AccessModel } from './accessModel';
import { ErrorExceptionResultBase } from './errorExceptionResultBase';
//@@tag-Version-2201011
export class ErrorExceptionResult<T> extends ErrorExceptionResultBase {
  listItems: T[];
  item: T;
  currentPageNumber: number;
  rowPerPage: number;

}
