import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogOutBoxTaskSchedulerModel } from '../../models/entity/sms/smsLogOutBoxTaskSchedulerModel';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class SmsLogOutBoxTaskSchedulerService extends ApiCmsServerBase<SmsLogOutBoxTaskSchedulerModel, string> {
  getModuleControllerUrl(): string {
    return 'SmsLogOutBoxTaskScheduler';
  }
  ServiceGetAllReadyToSend(model: FilterModel): Observable<ErrorExceptionResult<SmsLogOutBoxTaskSchedulerModel>> {
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

  ServiceGetAllSending(model: FilterModel): Observable<ErrorExceptionResult<SmsLogOutBoxTaskSchedulerModel>> {
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
