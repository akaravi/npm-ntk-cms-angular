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

        map((ret: any) => {
          return ret;
        })
      );
  }

}
