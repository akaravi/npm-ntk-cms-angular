import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { NewsCategoryModel } from '../../models/entity/news/newsCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';

@Injectable()
export class NewsCategoryService extends ApiCmsServerBase<
  NewsCategoryModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'NewsCategory';
  }

  ServiceMove(
    OldId: number,
    NewId: number
  ): Observable<ErrorExceptionResult<NewsCategoryModel>> {
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
