import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import {  map, retry } from 'rxjs/operators';
import { FilterModel } from '../../models/entity/base/filterModel';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { BiographyShareServerCategoryModel } from 'dist/ntk-cms-api/fesm2015/ntk-cms-api';


@Injectable()
export class BiographyShareServerCategoryService extends ApiCmsServerBase<BiographyShareServerCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'BiographyShareServerCategory';
  }

  ServiceGetAllOtherSite(model: FilterModel): Observable<ErrorExceptionResult<BiographyShareServerCategoryModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllOtherSite/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
