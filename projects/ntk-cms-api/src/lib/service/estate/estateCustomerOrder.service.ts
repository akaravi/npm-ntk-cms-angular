import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateCustomerOrderModel } from '../../models/entity/estate/estateCustomerOrderModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResultExportFile } from '../../models/entity/base/errorExceptionResultExportFile';

import { EstateCustomerOrderActionSendSmsDtoModel } from '../../models/dto/estate/estateCustomerOrderActionSendSmsDtoModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { EstateCustomerOrderFilterModel } from '../../models/dto/estate/estateCustomerOrderFilterModel';

@Injectable()
export class EstateCustomerOrderService extends ApiCmsServerBase<EstateCustomerOrderModel, string, EstateCustomerOrderFilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstateCustomerOrder';
  }
  ServiceActionSendSms(model: EstateCustomerOrderActionSendSmsDtoModel): Observable<ErrorExceptionResultBase> {

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ActionSendSms/', model, {
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
  ServiceGetAllWithFilter(model: EstateCustomerOrderFilterModel): Observable<ErrorExceptionResult<EstateCustomerOrderModel>> {
    if (model == null) {
      model = new EstateCustomerOrderFilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithFilter/', model, {
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
  ServiceGetAllWithResponsibleUserId(userId: number, model: EstateCustomerOrderFilterModel): Observable<ErrorExceptionResult<EstateCustomerOrderModel>> {
    if (model == null) {
      model = new EstateCustomerOrderFilterModel();
    }
    if (!userId || userId < 0) {
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
  ServiceGetAllWithCoverPropertyId(propertyId: string, model: EstateCustomerOrderFilterModel): Observable<ErrorExceptionResult<EstateCustomerOrderModel>> {
    if (model == null) {
      model = new EstateCustomerOrderFilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithCoverPropertyId/' + propertyId, model, {
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
  ServiceGetAllWithCoverPropertyIdHaveHistory(propertyId: string, model: EstateCustomerOrderFilterModel): Observable<ErrorExceptionResult<EstateCustomerOrderModel>> {
    if (model == null) {
      model = new EstateCustomerOrderFilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithCoverPropertyIdHaveHistory/' + propertyId, model, {
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

  ServiceGetAllWithResponsibleUserIdExportFile(userId: number, model: EstateCustomerOrderFilterModel): Observable<ErrorExceptionResultExportFile> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new EstateCustomerOrderFilterModel();
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
