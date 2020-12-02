import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { ArticleCategoryModel } from '../../models/entity/article/articleCategoryModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';


import { Injectable } from '@angular/core';


@Injectable()
export class ArticleCategoryService extends ApiCmsServerBase<ArticleCategoryModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ArticleCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExcptionResult<ArticleCategoryModel>> {
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
        map((ret: ErrorExcptionResult<ArticleCategoryModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
