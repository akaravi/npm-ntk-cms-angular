import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiServerBase } from '../base/apiServerBase.service';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Injectable } from '@angular/core';
import { HyperShopContentModel } from '../../models/entity/hyperShop/hyperShopContentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class HyperShopContentService extends  ApiCmsServerBase<HyperShopContentModel, string> {
  getModuleCotrolerUrl(): string {
    return 'HyperShopContent';
  }


  ServiceGetAllMicroService(model: FilterModel): Observable<ErrorExceptionResult<HyperShopContentModel>> {
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
        map((ret: ErrorExceptionResult<HyperShopContentModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceGetOneMicroService(id: string): Observable<ErrorExceptionResult<HyperShopContentModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetOneMicroService/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<HyperShopContentModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}
