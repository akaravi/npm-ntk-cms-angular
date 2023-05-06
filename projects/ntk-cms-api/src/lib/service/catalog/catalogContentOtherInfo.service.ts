import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CatalogContentOtherInfoModel } from '../../models/entity/catalog/catalogContentOtherInfoModel';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class CatalogContentOtherInfoService extends ApiCmsServerBase<CatalogContentOtherInfoModel, number>  {
  getModuleControllerUrl(): string {
    return 'CatalogContentOtherInfo';
  }
  ServiceAddBatch(model: CatalogContentOtherInfoModel[]): Observable<ErrorExceptionResult<CatalogContentOtherInfoModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddBatch', model, {
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
  ServiceEditBatch(model: CatalogContentOtherInfoModel[]): Observable<ErrorExceptionResult<CatalogContentOtherInfoModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .put(this.getBaseUrl() + this.getModuleControllerUrl() + '/EditBatch', model, {
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
