
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyModel } from '../../models/entity/estate/estatePropertyModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EstatePropertyService extends ApiCmsServerBase<EstatePropertyModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstateProperty';
  }

  ServiceFavoriteAdd(Id: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/FavoriteAdd/' + Id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceFavoriteRemove(Id: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/FavoriteRemove/' + Id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceFavoriteList(model: FilterModel): Observable<ErrorExceptionResult<EstatePropertyModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/FavoriteList', model, {
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
