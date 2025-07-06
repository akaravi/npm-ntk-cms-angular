import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { ArticleShareServerCategoryModel } from '../../models/entity/article/articleShareServerCategoryModel';



@Injectable()
export class ArticleShareServerCategoryService extends ApiCmsServerBase<ArticleShareServerCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ArticleShareServerCategory';
  }

  ServiceGetAllOtherSite(model: FilterModel): Observable<ErrorExceptionResult<ArticleShareServerCategoryModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllOtherSite/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
