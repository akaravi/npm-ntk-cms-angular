import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { SmsApiSendMessageDtoModel } from '../../models/dto/sms/smsApiSendMessageDtoModel';
import { SmsApiSendMessageOrderCalculateDtoModel } from '../../models/dto/sms/smsApiSendMessageOrderCalculateDtoModel';
import { SmsApiSendMessageTestDtoModel } from '../../models/dto/sms/smsApiSendMessageTestDtoModel';
import { SmsApiSendOrderCalculateResultModel } from '../../models/dto/sms/smsApiSendOrderCalculateResultModel';
import { SmsApiSendResultModel } from '../../models/dto/sms/smsApiSendResultModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiServerBase } from '../base/apiServerBase.service';

@Injectable()
export class SmsActionService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'SmsAction';
  }

  ServiceSendMessageTest(
    model: SmsApiSendMessageTestDtoModel
  ): Observable<ErrorExceptionResult<SmsApiSendResultModel>> {
    if (model == null) {
      model = new SmsApiSendMessageTestDtoModel();
    }

    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/SendMessageTest',
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
  ServiceSendMessage(
    model: SmsApiSendMessageDtoModel
  ): Observable<ErrorExceptionResult<SmsApiSendResultModel>> {
    if (model == null) {
      model = new SmsApiSendMessageDtoModel();
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
    model: SmsApiSendMessageOrderCalculateDtoModel
  ): Observable<ErrorExceptionResult<SmsApiSendOrderCalculateResultModel>> {
    if (model == null) {
      model = new SmsApiSendMessageOrderCalculateDtoModel();
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
  ServiceGetMessagePlaceholders(): Observable<string[]> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetMessagePlaceholders',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: string[]) => {
          return ret ?? [];
        })
      );
  }
}
