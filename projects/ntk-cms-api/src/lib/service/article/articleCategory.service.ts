import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { ArticleCategoryModel } from '../../models/entity/article/articleCategoryModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';


@Injectable()
export class ArticleCategoryService extends ApiCmsServerBase<ArticleCategoryModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ArticleCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExceptionResult<ArticleCategoryModel>> {
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
