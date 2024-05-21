import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { BlogCategoryModel } from '../../models/entity/blog/blogCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class BlogCategoryService extends ApiCmsServerBase<BlogCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'BlogCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExceptionResult<BlogCategoryModel>> {
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
