import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { BiographyShareServerCategoryModel } from '../../models/entity/biography/biographyShareServerCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class BiographyShareServerCategoryService extends ApiCmsServerBase<
  BiographyShareServerCategoryModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'BiographyShareServerCategory';
  }

  ServiceGetAllOtherSite(
    model: FilterModel
  ): Observable<ErrorExceptionResult<BiographyShareServerCategoryModel>> {
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
