import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyModel } from '../../models/entity/estate/estatePropertyModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { map, retry } from 'rxjs/operators';
import { CoreModuleReportAbuseDtoModel } from '../../models/dto/core-module/coreModuleReportAbuseDtoModel';
import { EstatePropertySearchDtoModel } from '../../models/dto/estate/estatePropertySearchDtoModel';
import { ErrorExceptionResultExportFile } from '../../models/entity/base/errorExceptionResultExportFile';
import { EstatePropertyActionSendSmsDtoModel } from '../../models/dto/estate/estatePropertyActionSendSmsDtoModel';

@Injectable()
export class EstatePropertyService extends ApiCmsServerBase<EstatePropertyModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateProperty';
  }
  ServiceActionSendSmsToCustomerOrder(Id: string): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ActionSendSmsToCustomerOrder/' + Id, {
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
  ServiceActionSendSms(model: EstatePropertyActionSendSmsDtoModel): Observable<ErrorExceptionResultBase> {

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
  ServiceFavoriteAdd(Id: string): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/FavoriteAdd/' + Id, {
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

  ServiceFavoriteRemove(Id: string): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/FavoriteRemove/' + Id, {
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/FavoriteList', model, {
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
  ServiceReportAbuseAdd(model: CoreModuleReportAbuseDtoModel): Observable<ErrorExceptionResult<EstatePropertyModel>> {
    if (model == null) {
      model = new CoreModuleReportAbuseDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ReportAbuseAdd', model, {
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
  ServiceReportAbuseList(model: FilterModel): Observable<ErrorExceptionResult<EstatePropertyModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ReportAbuseList', model, {
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
  ServiceGetAllWithFilter(model: EstatePropertySearchDtoModel): Observable<ErrorExceptionResult<EstatePropertyModel>> {
    if (model == null) {
      model = new EstatePropertySearchDtoModel();
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
  ServiceGetAllWithBillboardId(BillboardId: string, model: FilterModel): Observable<ErrorExceptionResult<EstatePropertyModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    if (!BillboardId || BillboardId.length === 0) {
      BillboardId = '00';
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithBillboardId/' + BillboardId, model, {
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
  ServiceGetAllWithCustomerOrderId(CustomerOrderId: string, model: FilterModel): Observable<ErrorExceptionResult<EstatePropertyModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    if (!CustomerOrderId || CustomerOrderId.length === 0) {
      CustomerOrderId = '00';
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithCustomerOrderId/' + CustomerOrderId, model, {
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
  ServiceGetAllWithCustomerOrderIdHaveHistory(CustomerOrderId: string, model: FilterModel): Observable<ErrorExceptionResult<EstatePropertyModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    if (!CustomerOrderId || CustomerOrderId.length === 0) {
      CustomerOrderId = '00';
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithCustomerOrderIdHaveHistory/' + CustomerOrderId, model, {
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
  ServiceGetAllWithCustomerOrderIdExportFile(CustomerOrderId: string,model: FilterModel): Observable<ErrorExceptionResultExportFile> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithCustomerOrderIdExportFile/'+ CustomerOrderId, model, {
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
  ServiceGetAllWithResponsibleUserId(userId: number, model: FilterModel): Observable<ErrorExceptionResult<EstatePropertyModel>> {
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

  ServiceGetAllWithResponsibleUserIdExportFile(userId: number,model: FilterModel): Observable<ErrorExceptionResultExportFile> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithResponsibleUserIdExportFile/'+ userId, model, {
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
