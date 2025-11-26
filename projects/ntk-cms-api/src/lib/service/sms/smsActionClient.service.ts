import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { SmsApiSendOrderCalculateResultModel } from '../../models/dto/sms/smsApiSendOrderCalculateResultModel';
import { SmsClientSendMessageDtoModel } from '../../models/dto/sms/smsClientSendMessageDtoModel';
import { SmsClientSendMessageResultModel } from '../../models/dto/sms/smsClientSendMessageResultModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiServerBase } from '../base/apiServerBase.service';

@Injectable()
export class SmsActionClientService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'SmsActionClient';
  }

  ServiceSendMessage(
    model: SmsClientSendMessageDtoModel
  ): Observable<ErrorExceptionResult<SmsClientSendMessageResultModel>> {
    if (model == null) {
      model = new SmsClientSendMessageDtoModel();
    }

    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/SendMessage',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceOrderCalculate(
    model: SmsClientSendMessageDtoModel
  ): Observable<ErrorExceptionResult<SmsApiSendOrderCalculateResultModel>> {
    if (model == null) {
      model = new SmsClientSendMessageDtoModel();
    }

    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderCalculate',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
}
