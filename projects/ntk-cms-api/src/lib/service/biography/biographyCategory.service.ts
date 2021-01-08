import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { BiographyCategoryModel } from '../../models/entity/biography/biographyCategoryModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';


@Injectable()
export class BiographyCategoryService extends ApiCmsServerBase<BiographyCategoryModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'BiographyCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExceptionResult<BiographyCategoryModel>> {
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
