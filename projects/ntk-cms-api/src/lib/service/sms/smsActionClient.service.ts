import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { SmsApiSendMessageDtoModel } from '../../models/dto/sms/smsApiSendMessageDtoModel';
import { SmsApiSendMessageTestDtoModel } from '../../models/dto/sms/smsApiSendMessageTestDtoModel';
import { SmsApiSendResultModel } from '../../models/dto/sms/smsApiSendResultModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiServerBase } from '../base/apiServerBase.service';
import { SmsApiSendMessageOrderCalculateDtoModel } from '../../models/dto/sms/smsApiSendMessageOrderCalculateDtoModel';
import { SmsApiSendOrderCalculateResultModel } from '../../models/dto/sms/smsApiSendOrderCalculateResultModel';
import { SmsClientSendMessageDtoModel } from '../../models/dto/sms/smsClientSendMessageDtoModel';
import { SmsClientSendMessageResultModel } from '../../models/dto/sms/smsClientSendMessageResultModel';

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
          return this.errorExceptionResultCheck(ret);
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
          return this.errorExceptionResultCheck(ret);
        })
      );
  }
}
