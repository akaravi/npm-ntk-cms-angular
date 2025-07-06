import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { EstateCustomerOrderActionSendSmsDtoModel } from '../../models/dto/estate/estateCustomerOrderActionSendSmsDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { ErrorExceptionResultExportFile } from '../../models/entity/base/errorExceptionResultExportFile';
import { EstateCustomerOrderModel } from '../../models/entity/estate/estateCustomerOrderModel';
import { EstateCustomerOrderFilterModel } from '../../models/filters/estate/estateCustomerOrderFilterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserModel } from '../../models/entity/core-main/coreUserModel';


@Injectable()
export class EstateCustomerOrderService extends ApiCmsServerBase<EstateCustomerOrderModel, string, EstateCustomerOrderFilterModel> {
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
        
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceGetAllResponsibleUserId(id: string, model: FilterModel): Observable<ErrorExceptionResult<CoreUserModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    if (!id || id.length <=0) {
      id = '';
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllResponsibleUserId/' + id, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
        
        map((ret: any) => {
          return this.errorExceptionResultCheckExportFile(ret);
        }),
      );
  }
  ServiceGetAllWithCoverCategoryRackFolderId(RackFolderId: string, model: EstateCustomerOrderFilterModel): Observable<ErrorExceptionResult<EstateCustomerOrderModel>> {
    if (model == null) {
      model = new EstateCustomerOrderFilterModel();
    }
    if (!RackFolderId || RackFolderId.length === 0) {
      RackFolderId = '00';
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithCoverCategoryRackFolderId/' + RackFolderId, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllWithCoverCategoryZoneId(ZoneId: string, model: EstateCustomerOrderFilterModel): Observable<ErrorExceptionResult<EstateCustomerOrderModel>> {
    if (model == null) {
      model = new EstateCustomerOrderFilterModel();
    }
    if (!ZoneId || ZoneId.length === 0) {
      ZoneId = '00';
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithCoverCategoryZoneId/' + ZoneId, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
