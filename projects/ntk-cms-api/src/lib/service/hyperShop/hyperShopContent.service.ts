import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiServerBase } from '../base/apiServerBase.service';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { Injectable } from '@angular/core';
import { HyperShopContentModel } from '../../models/entity/hyperShop/hyperShopContentModel';

@Injectable()
export class HyperShopContentService extends ApiServerBase {
  getModuleCotrolerUrl(): string {
    return 'HyperShopContent';
  }


  ServiceGetAll(model: FilterModel): Observable<ErrorExcptionResult<HyperShopContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAll/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<HyperShopContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGetOne(id: string): Observable<ErrorExcptionResult<HyperShopContentModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetOne/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<HyperShopContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

}
