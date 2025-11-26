import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ChartShareServerCategoryService extends ApiCmsServerBase<
  any,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'ChartShareServerCategory';
  }

  ServiceGetAllOtherSite(
    model: FilterModel
  ): Observable<ErrorExceptionResult<any>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllOtherSite/',
        model,
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
