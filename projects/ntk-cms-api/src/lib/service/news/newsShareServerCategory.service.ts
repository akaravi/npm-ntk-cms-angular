import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { NewsShareServerCategoryModel } from '../../models/entity/news/newsShareServerCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class NewsShareServerCategoryService extends ApiCmsServerBase<
  NewsShareServerCategoryModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'NewsShareServerCategory';
  }

  ServiceGetAllOtherSite(
    model: FilterModel
  ): Observable<ErrorExceptionResult<NewsShareServerCategoryModel>> {
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
