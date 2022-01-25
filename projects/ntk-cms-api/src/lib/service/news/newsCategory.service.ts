import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { NewsCategoryModel } from '../../models/entity/news/newsCategoryModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';


@Injectable()
export class NewsCategoryService extends ApiCmsServerBase<NewsCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'NewsCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExceptionResult<NewsCategoryModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/Move',
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
