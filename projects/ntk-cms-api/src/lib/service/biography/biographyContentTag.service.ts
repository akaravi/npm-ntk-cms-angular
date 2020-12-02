import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
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

  ServiceSearchTag(model: SearchTagModel): Observable<ErrorExcptionResult<BiographyContentTagModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SearchTag/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<BiographyContentTagModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
