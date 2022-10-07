import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogOutBoxQueueModel } from '../../models/entity/sms/smsLogOutBoxQueueModel';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class SmsLogOutBoxQueueService extends ApiCmsServerBase<SmsLogOutBoxQueueModel, string> {
  getModuleControllerUrl(): string {
    return 'SmsLogOutBoxQueue';
  }
  ServiceGetAllReadyToSend(model: FilterModel): Observable<ErrorExceptionResult<SmsLogOutBoxQueueModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllReadyToSend/' ,model, {
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

  ServiceGetAllSending(model: FilterModel): Observable<ErrorExceptionResult<SmsLogOutBoxQueueModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllSending/' ,model, {
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
