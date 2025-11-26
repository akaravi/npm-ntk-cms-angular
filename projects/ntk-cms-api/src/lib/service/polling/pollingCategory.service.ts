import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { PollingCategoryModel } from '../../models/entity/polling/pollingCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class PollingCategoryService extends ApiCmsServerBase<
  PollingCategoryModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'PollingCategory';
  }

  ServiceMove(
    OldId: number,
    NewId: number
  ): Observable<ErrorExceptionResult<PollingCategoryModel>> {
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
