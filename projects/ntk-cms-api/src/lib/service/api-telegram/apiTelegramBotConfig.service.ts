import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Injectable } from '@angular/core';
import { ApiTelegramBotConfigModel } from '../../models/entity/api-telegram/apiTelegramBotConfigModel';

import { ApiTelegramRenderInfoModel } from '../../models/dto/api-telegram/apiTelegramRenderInfoModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { ApiTelegramSendMessageTodoModel } from '../../models/dto/api-telegram/apiTelegramSendMessageTodoModel';


@Injectable()
export class ApiTelegramBotConfigService extends ApiCmsServerBase<ApiTelegramBotConfigModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ApiTelegramBotConfig';
  }

  ServiceSendMessage(model: ApiTelegramSendMessageTodoModel): Observable<ErrorExceptionResultBase> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SendMessage', model, { headers: this.getHeaders(), },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceGetUpdatesAsync(id: number): Observable<ErrorExceptionResult<ApiTelegramRenderInfoModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetUpdatesAsync/'+id, { headers: this.getHeaders(), },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetUpdatesAsyncLast(id: number): Observable<ErrorExceptionResult<ApiTelegramRenderInfoModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetUpdatesAsyncLast/'+id, { headers: this.getHeaders(), },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetMeAsync(id: number): Observable<ErrorExceptionResult<ApiTelegramRenderInfoModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetMeAsync/'+id, { headers: this.getHeaders(), },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceSetWebhookAsync(id: number): Observable<ErrorExceptionResult<ApiTelegramRenderInfoModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SetWebhookAsync/'+id, { headers: this.getHeaders(), },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceSetWebhookAsyncEmpty(id: number): Observable<ErrorExceptionResult<ApiTelegramRenderInfoModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SetWebhookAsyncEmpty/'+id, { headers: this.getHeaders(), },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceSetAllWebhookUpdate(): Observable<ErrorExceptionResult<ApiTelegramRenderInfoModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SetAllWebhookUpdate/', { headers: this.getHeaders(), },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
