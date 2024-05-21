import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiServerBase } from './apiServerBase.service';


export class ErrorService extends ApiServerBase {
  ServiceErrorApi<TOut>(model: any): Observable<ErrorExceptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + '/Add', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  errorExceptionResultCheck<TOut>(model: ErrorExceptionResult<TOut>): ErrorExceptionResult<TOut> {
    if (model) {
      // tslint:disable-next-line: no-empty
      if (model.isSuccess) {
      } else {
        // this.toastrService.error(model.errorMessage, 'خطا در دریافت از سرور');
      }
    }
    return model;
  }
}
