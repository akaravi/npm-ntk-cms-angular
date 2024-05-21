import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { BlogShareServerCategoryModel } from '../../models/entity/blog/blogShareServerCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';



@Injectable()
export class BlogShareServerCategoryService extends ApiCmsServerBase<BlogShareServerCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'BlogShareServerCategory';
  }

  ServiceGetAllOtherSite(model: FilterModel): Observable<ErrorExceptionResult<BlogShareServerCategoryModel>> {
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
