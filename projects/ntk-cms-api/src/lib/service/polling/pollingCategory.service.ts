import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { PollingCategoryModel } from '../../models/entity/polling/pollingCategoryModel';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class PollingCategoryService extends ApiCmsServerBase<PollingCategoryModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'PollingCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExceptionResult<PollingCategoryModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Move',
        { Old: OldId, New: NewId },
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
