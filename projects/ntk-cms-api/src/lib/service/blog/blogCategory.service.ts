import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { BlogCategoryModel } from '../../models/entity/blog/blogCategoryModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class BlogCategoryService extends ApiCmsServerBase<BlogCategoryModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'BlogCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExceptionResult<BlogCategoryModel>> {
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
