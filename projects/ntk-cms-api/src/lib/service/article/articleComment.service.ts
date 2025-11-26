import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ArticleCommentModel } from '../../models/entity/article/articleCommentModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';

@Injectable()
export class ArticleCommentService extends ApiCmsServerBase<
  ArticleCommentModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'ArticleComment';
  }

  ServiceLikeClick(Id: number): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/LikeClick/' + Id,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }

  ServiceDisLikeClick(Id: number): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/DisLikeClick/' +
          Id,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
}
