import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiPathModel } from '../../models/entity/sms/smsMainApiPathModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { map, retry } from 'rxjs/operators';
import { SmsApiGetBalanceResultModel } from '../../models/dto/sms/smsApiGetBalanceResultModel';
import { SmsApiGetReceiveInboxManuallyResultModel } from '../../models/dto/sms/smsApiGetReceiveInboxManuallyResultModel';
import { SmsApiGetTokenResultModel } from '../../models/dto/sms/smsApiGetTokenResultModel';
import { SmsMainApiPathAliasJsonModel } from '../../models/entity/sms/smsMainApiPathAliasJsonModel';
import { EditStepDtoModel } from '../../models/dto/core-main/editStepDtoModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';


@Injectable()
export class SmsMainApiPathService extends ApiCmsServerBase<
  SmsMainApiPathModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPath';
  }
  ServiceGetOneWithJsonFormatter(
    id: string
  ): Observable<ErrorExceptionResult<SmsMainApiPathAliasJsonModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetOneWithJsonFormatter/' +
          id,
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

  ServiceGetToken(
    id: string
  ): Observable<ErrorExceptionResult<SmsApiGetTokenResultModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetToken/' + id,
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
  ServiceGetBalance(
    id: string
  ): Observable<ErrorExceptionResult<SmsApiGetBalanceResultModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetBalance/' + id,
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
  ServiceGetReceiveInboxManually(
    id: string
  ): Observable<
    ErrorExceptionResult<SmsApiGetReceiveInboxManuallyResultModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetReceiveInboxManually/' +
          id,
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
  ServiceEditStep(
    model: EditStepDtoModel<string>
  ): Observable<ErrorExceptionResultBase> {
    if (!model) {
      model = new EditStepDtoModel<string>();
    }
    return this.http
      .put(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/EditStep',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        })
      );
  }
}
