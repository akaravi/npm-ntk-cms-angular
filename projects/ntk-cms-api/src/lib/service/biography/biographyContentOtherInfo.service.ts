import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BiographyContentOtherInfoModel } from '../../models/entity/biography/biographyContentOtherInfoModel';

import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class BiographyContentOtherInfoService extends ApiCmsServerBase<BiographyContentOtherInfoModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'BiographyContentOtherInfo';
  }
  ServiceAddBatch(model: BiographyContentOtherInfoModel[]): Observable<ErrorExceptionResult<BiographyContentOtherInfoModel>> {
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
  ServiceEditBatch(model: BiographyContentOtherInfoModel[]): Observable<ErrorExceptionResult<BiographyContentOtherInfoModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .put(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EditBatch', model, {
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

