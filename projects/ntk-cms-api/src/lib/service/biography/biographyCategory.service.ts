import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { BiographyCategoryModel } from '../../models/entity/biography/biographyCategoryModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';


import { Injectable } from '@angular/core';


@Injectable()
export class BiographyCategoryService extends ApiCmsServerBase<BiographyCategoryModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'BiographyCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExcptionResult<BiographyCategoryModel>> {
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
        map((ret: ErrorExcptionResult<BiographyCategoryModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
