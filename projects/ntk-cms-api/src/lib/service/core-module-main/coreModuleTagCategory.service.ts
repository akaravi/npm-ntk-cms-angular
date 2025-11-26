import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleTagCategoryModel } from '../../models/entity/core-module-main/coreModuleTagCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreModuleTagCategoryService extends ApiCmsServerBase<
  CoreModuleTagCategoryModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'CoreModuleTagCategory';
  }
  ServiceGetAllTree(
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreModuleTagCategoryModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.rowPerPage = 200;
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllTree',
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
