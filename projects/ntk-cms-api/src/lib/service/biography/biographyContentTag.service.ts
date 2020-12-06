import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { SearchTagModel } from '../../models/entity/base/searchModel';
import { BiographyContentTagModel } from '../../models/entity/biography/biographyContentTagModel';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';


@Injectable()
export class BiographyContentTagService extends ApiCmsServerBase<BiographyContentTagModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'BiographyContentTag';
  }

  ServiceSearchTag(model: SearchTagModel): Observable<ErrorExceptionResult<BiographyContentTagModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SearchTag/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<BiographyContentTagModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
