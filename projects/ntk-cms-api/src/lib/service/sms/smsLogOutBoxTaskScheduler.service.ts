import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsLogOutBoxTaskSchedulerModel } from '../../models/entity/sms/smsLogOutBoxTaskSchedulerModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsLogOutBoxTaskSchedulerService extends ApiCmsServerBase<SmsLogOutBoxTaskSchedulerModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsLogOutBoxTaskScheduler';
  }
  ServiceGetAllReadyToSend(model: FilterModel): Observable<ErrorExceptionResult<SmsLogOutBoxTaskSchedulerModel>> {
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

  ServiceGetAllSending(model: FilterModel): Observable<ErrorExceptionResult<SmsLogOutBoxTaskSchedulerModel>> {
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
