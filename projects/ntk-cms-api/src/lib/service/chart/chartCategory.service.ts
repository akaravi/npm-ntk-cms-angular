import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ChartCategoryModel } from '../../models/entity/chart/chartCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';

@Injectable()
export class ChartCategoryService extends ApiCmsServerBase<
  ChartCategoryModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'ChartCategory';
  }

  ServiceMove(
    OldId: number,
    NewId: number
  ): Observable<ErrorExceptionResult<ChartCategoryModel>> {
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
