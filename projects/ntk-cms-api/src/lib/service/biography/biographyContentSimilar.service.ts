import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BiographyContentSimilar } from '../../models/entity/biography/biographyContentSimilar';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class BiographyContentSimilarService extends ApiCmsServerBase<BiographyContentSimilar, number>  {


  getModuleCotrolerUrl(): string {
    return 'BiographyContentSimilar';
  }
  ServiceAddBatch(model: BiographyContentSimilar[]): Observable<ErrorExceptionResult<BiographyContentSimilar>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AddBatch', model, {
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
}
