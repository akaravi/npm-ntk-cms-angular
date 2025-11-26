import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CatalogCategoryModel } from '../../models/entity/catalog/catalogCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CatalogCategoryService extends ApiCmsServerBase<
  CatalogCategoryModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'CatalogCategory';
  }

  ServiceMove(
    OldId: string,
    NewId: string
  ): Observable<ErrorExceptionResult<CatalogCategoryModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/Move',
        { Old: OldId, New: NewId },
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
