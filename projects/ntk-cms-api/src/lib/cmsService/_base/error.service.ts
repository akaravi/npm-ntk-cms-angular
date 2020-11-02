import { ErrorExcptionResult } from '../../cmsModels/base/errorExcptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiServerBase } from './apiServerBase.service';


export class ErrorService extends ApiServerBase  {
  ServiceErrorApi<TOut>(model: any): Observable<ErrorExcptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + '/Add', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  errorExcptionResultCheck<TOut>(model: ErrorExcptionResult<TOut>): ErrorExcptionResult<TOut> {
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
