import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateCustomerOrderModel } from '../../models/entity/estate/estateCustomerOrderModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { FilterModel } from '../../models/entity/base/filterModel';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResultExportFile } from '../../models/entity/base/errorExceptionResultExportFile';
import { EstateCustomerOrderSearchDtoModel } from '../../models/dto/estate/estateCustomerOrderSearchDtoModel';
import { EstateCustomerOrderActionSendSmsDtoModel } from '../../models/dto/estate/estateCustomerOrderActionSendSmsDtoModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';

@Injectable()
export class EstateCustomerOrderService extends ApiCmsServerBase<EstateCustomerOrderModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateCustomerOrder';
  }
  ServiceActionSendSms(model: EstateCustomerOrderActionSendSmsDtoModel): Observable<ErrorExceptionResultBase> {

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ActionSendSms/',model, {
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
  ServiceGetAllWithFilter(model: EstateCustomerOrderSearchDtoModel): Observable<ErrorExceptionResult<EstateCustomerOrderModel>> {
    if (model == null) {
      model = new EstateCustomerOrderSearchDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithFilter/' , model, {
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
  ServiceGetAllWithResponsibleUserId(userId: number, model: FilterModel): Observable<ErrorExceptionResult<EstateCustomerOrderModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    if (!userId || userId< 0) {
      userId = 0;
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithResponsibleUserId/' + userId, model, {
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
  ServiceGetAllWithResponsiblePropertyId(propertyId: string, model: FilterModel): Observable<ErrorExceptionResult<EstateCustomerOrderModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithResponsiblePropertyId/' + propertyId, model, {
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

  ServiceGetAllWithResponsibleUserIdExportFile(userId: number, model: FilterModel): Observable<ErrorExceptionResultExportFile> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithResponsibleUserIdExportFile/' + userId, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheckExportFile(ret);
        }),
      );
  }
}
