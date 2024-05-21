import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { HyperShopCategoryModel } from '../../models/entity/hyper-shop/hyperShopCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class HyperShopCategoryService extends ApiCmsServerBase<HyperShopCategoryModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'HyperShopCategory';
  }


  ServiceGetAllMicroService(model: FilterModel): Observable<ErrorExceptionResult<HyperShopCategoryModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllMicroService/', model, {
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

  ServiceGetOneMicroService(id: string): Observable<ErrorExceptionResult<HyperShopCategoryModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetOneMicroService/' + id, {
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
