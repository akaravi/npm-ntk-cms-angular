import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathModel } from '../../models/entity/sms/smsMainApiPathModel';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { SmsApiSendTestDtoModel } from '../../models/dto/sms/smsApiSendTestDtoModel';
import { SmsApiSendResultModel } from '../../models/dto/sms/smsApiSendResultModel';
import { map, retry } from 'rxjs/operators';
import { SmsMainApiPathAliasJsonModel } from '../../models/entity/sms/smsMainApiPathAliasJsonModel';


@Injectable()
export class SmsMainApiPathService extends ApiCmsServerBase<SmsMainApiPathModel, string> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPath';
  }
  ServiceGetOneWithJsonFormatter(id: string): Observable<ErrorExceptionResult<SmsMainApiPathAliasJsonModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetOneWithJsonFormatter/' + id, {
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
  ServiceTestSend(model: SmsApiSendTestDtoModel): Observable<ErrorExceptionResult<SmsApiSendResultModel>> {
    if (model == null) {
      model = new SmsApiSendTestDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/TestSend', model, {
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
