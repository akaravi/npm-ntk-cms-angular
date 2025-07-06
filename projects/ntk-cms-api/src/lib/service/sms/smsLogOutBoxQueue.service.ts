import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsLogOutBoxQueueModel } from '../../models/entity/sms/smsLogOutBoxQueueModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsLogOutBoxQueueService extends ApiCmsServerBase<SmsLogOutBoxQueueModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsLogOutBoxQueue';
  }
  ServiceGetAllReadyToSend(model: FilterModel): Observable<ErrorExceptionResult<SmsLogOutBoxQueueModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllReadyToSend/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAllSending(model: FilterModel): Observable<ErrorExceptionResult<SmsLogOutBoxQueueModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllSending/', model, {
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
