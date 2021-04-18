
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleTagCategoryModel } from '../../models/entity/core-module-main/coreModuleTagCategoryModel';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { FilterModel } from '../../models/entity/base/filterModel';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class CoreModuleTagCategoryService extends ApiCmsServerBase<CoreModuleTagCategoryModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreModuleTagCategory';
  }
  ServiceGetAllTree(model: FilterModel): Observable<ErrorExceptionResult<CoreModuleTagCategoryModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.RowPerPage = 200;
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllTree', model, {
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
