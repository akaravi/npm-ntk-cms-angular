import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiServerBase } from '../base/apiServerBase.service';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { Injectable } from '@angular/core';
import { HyperShopCategoryModel } from '../../models/entity/hyperShop/hyperShopCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class HyperShopCategoryService extends  ApiCmsServerBase<HyperShopCategoryModel, string> {
  getModuleCotrolerUrl(): string {
    return 'HyperShopCategory';
  }


  ServiceGetAll(model: FilterModel): Observable<ErrorExcptionResult<HyperShopCategoryModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllMicroService/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<HyperShopCategoryModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGetOne(id: string): Observable<ErrorExcptionResult<HyperShopCategoryModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetOneMicroService/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<HyperShopCategoryModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

}
