import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiServerBase } from '../base/apiServerBase.service';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { Injectable } from '@angular/core';
import { HyperShopContentModel } from '../../models/entity/hyperShop/hyperShopContentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class HyperShopContentService extends  ApiCmsServerBase<HyperShopContentModel, string> {
  getModuleCotrolerUrl(): string {
    return 'HyperShopContent';
  }


  ServiceGetAllMicroService(model: FilterModel): Observable<ErrorExcptionResult<HyperShopContentModel>> {
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
        map((ret: ErrorExcptionResult<HyperShopContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGetOneMicroService(id: string): Observable<ErrorExcptionResult<HyperShopContentModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetOneMicroService/' + id, {
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
