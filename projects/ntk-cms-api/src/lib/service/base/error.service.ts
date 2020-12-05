import { catchError, map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiServerBase } from './apiServerBase.service';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


export class ErrorService extends ApiServerBase  {
  ServiceErrorApi<TOut>(model: any): Observable<ErrorExceptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + '/Add', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  errorExceptionResultCheck<TOut>(model: ErrorExceptionResult<TOut>): ErrorExceptionResult<TOut> {
    if (model) {
      // tslint:disable-next-line: no-empty
      if (model.IsSuccess) {
      } else {
        // this.toastrService.error(model.ErrorMessage, 'خطا در دریافت از سرور');
      }
    }
    return model;
  }
}
