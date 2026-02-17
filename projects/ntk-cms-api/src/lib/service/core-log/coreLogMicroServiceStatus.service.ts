import { MicroServiceCommandRequestDtoModel } from '../../models/dto/core-log/microServiceCommandRequestDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreLogMicroServicePingModel } from '../../models/entity/core-log/coreLogMicroServicePingModel';
import { CoreLogMicroServiceStatusModel } from '../../models/entity/core-log/coreLogMicroServiceStatusModel';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreLogMicroServiceStatusService extends ApiCmsServerBase<
  CoreLogMicroServiceStatusModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'CoreLogMicroServiceStatus';
  }

  getBaseUrl(): string {
    const base = super.getBaseUrl();
    return base.replace(/\/v\d+\/?$/, '/v3/');
  }

  ServiceGetAllStatus(): Observable<
    ErrorExceptionResult<CoreLogMicroServiceStatusModel>
  > {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl(), {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        map((ret: any) => ret),
      );
  }

  ServiceGetStatusByAppInfoFilter(
    appInfoFilter: string,
  ): Observable<ErrorExceptionResult<CoreLogMicroServiceStatusModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          encodeURIComponent(appInfoFilter),
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        map((ret: any) => ret),
      );
  }

  ServicePing(
    appInfoFilter: string,
    timeoutSeconds: number = 15,
  ): Observable<ErrorExceptionResult<CoreLogMicroServicePingModel>> {
    const url =
      this.getBaseUrl() +
      this.getModuleControllerUrl() +
      '/Ping/' +
      encodeURIComponent(appInfoFilter) +
      '?timeoutSeconds=' +
      timeoutSeconds;
    return this.http.post(url, {}, { headers: this.getHeaders() }).pipe(
      retry(this.configApiRetry),
      map((ret: any) => ret),
    );
  }

  ServiceSendCommand(
    appInfoFilter: string,
    command: MicroServiceCommandRequestDtoModel,
  ): Observable<ErrorExceptionResultBase> {
    const url =
      this.getBaseUrl() +
      this.getModuleControllerUrl() +
      '/Command/' +
      encodeURIComponent(appInfoFilter);
    return this.http
      .post(url, command || {}, { headers: this.getHeaders() })
      .pipe(
        retry(this.configApiRetry),
        map((ret: any) => ret),
      );
  }
}
