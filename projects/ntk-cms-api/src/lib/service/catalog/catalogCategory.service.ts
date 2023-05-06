import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { CatalogCategoryModel } from '../../models/entity/catalog/catalogCategoryModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Injectable } from '@angular/core';

@Injectable()
export class CatalogCategoryService extends ApiCmsServerBase<CatalogCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'CatalogCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExceptionResult<CatalogCategoryModel>> {
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
