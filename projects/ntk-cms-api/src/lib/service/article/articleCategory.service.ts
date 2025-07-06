import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ArticleCategoryModel } from '../../models/entity/article/articleCategoryModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class ArticleCategoryService extends ApiCmsServerBase<ArticleCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ArticleCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExceptionResult<ArticleCategoryModel>> {
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
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
