import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiPathModel } from '../../models/entity/sms/smsMainApiPathModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { map, retry } from 'rxjs/operators';
import { SmsApiGetBalanceResultModel } from '../../models/dto/sms/smsApiGetBalanceResultModel';
import { SmsApiSendMessageDtoModel } from '../../models/dto/sms/smsApiSendMessageDtoModel';
import { SmsApiSendMessageTestDtoModel } from '../../models/dto/sms/smsApiSendMessageTestDtoModel';
import { SmsApiSendResultModel } from '../../models/dto/sms/smsApiSendResultModel';
import { SmsMainApiPathAliasJsonModel } from '../../models/entity/sms/smsMainApiPathAliasJsonModel';
import { SmsApiGetTokenResultModel } from '../../models/dto/sms/smsApiGetTokenResultModel';
import { SmsApiGetReceiveInboxManuallyResultModel } from '../../models/dto/sms/smsApiGetReceiveInboxManuallyResultModel';


@Injectable()
export class SmsMainApiPathService extends ApiCmsServerBase<SmsMainApiPathModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPath';
  }
  ServiceGetOneWithJsonFormatter(id: string): Observable<ErrorExceptionResult<SmsMainApiPathAliasJsonModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetOneWithJsonFormatter/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceSendMessageTest(model: SmsApiSendMessageTestDtoModel): Observable<ErrorExceptionResult<SmsApiSendResultModel>> {
    if (model == null) {
      model = new SmsApiSendMessageTestDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/SendMessageTest', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceSendMessage(model: SmsApiSendMessageDtoModel): Observable<ErrorExceptionResult<SmsApiSendResultModel>> {
    if (model == null) {
      model = new SmsApiSendMessageDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/SendMessage', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetToken(id: string): Observable<ErrorExceptionResult<SmsApiGetTokenResultModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetToken/'+ id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetBalance(id: string): Observable<ErrorExceptionResult<SmsApiGetBalanceResultModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetBalance/'+ id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetReceiveInboxManually(id: string): Observable<ErrorExceptionResult<SmsApiGetReceiveInboxManuallyResultModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetReceiveInboxManually/'+ id, {
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
