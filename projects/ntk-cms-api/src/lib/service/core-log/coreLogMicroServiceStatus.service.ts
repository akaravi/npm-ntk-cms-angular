import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { CoreLogMicroServicePingModel } from '../../models/entity/core-log/coreLogMicroServicePingModel';
import { CoreLogMicroServiceStatusModel } from '../../models/entity/core-log/coreLogMicroServiceStatusModel';
import { MicroServiceCommandRequestDtoModel } from '../../models/dto/core-log/microServiceCommandRequestDtoModel';
import { ApiServerBase } from '../base/apiServerBase.service';

/**
 * سرویس وضعیت و مانیتورینگ میکروسرویس‌ها
 */
@Injectable()
export class CoreLogMicroServiceStatusService extends ApiServerBase {
  constructor(@Inject(HttpClient) public http: HttpClient) {
    super(http);
  }

  private getControllerUrl(): string {
    const base = this.getBaseUrl();
    const v3Base = base.replace(/\/v\d+\/?$/, '/v3/');
    return v3Base + 'CoreLog/MicroServiceStatus';
  }

  /**
   * لیست آخرین وضعیت همه میکروسرویس‌ها
   */
  ServiceGetAllStatus(): Observable<ErrorExceptionResult<CoreLogMicroServiceStatusModel>> {
    return this.http
      .get(this.getControllerUrl(), { headers: this.getHeaders() })
      .pipe(
        retry(this.configApiRetry),
        map((ret: any) => ret)
      );
  }

  /**
   * لیست وضعیت میکروسرویس‌ها با فیلتر AppInfo (مثال: MagfaSms, Sms)
   */
  ServiceGetStatusByAppInfoFilter(
    appInfoFilter: string
  ): Observable<ErrorExceptionResult<CoreLogMicroServiceStatusModel>> {
    return this.http
      .get(this.getControllerUrl() + '/' + encodeURIComponent(appInfoFilter), {
        headers: this.getHeaders()
      })
      .pipe(
        retry(this.configApiRetry),
        map((ret: any) => ret)
      );
  }

  /**
   * ارسال Ping به میکروسرویس و دریافت RTT
   * @param appInfoFilter شناسه صف (مثال: MagfaSms)
   * @param timeoutSeconds حداکثر زمان انتظار (پیش‌فرض: 15)
   */
  ServicePing(
    appInfoFilter: string,
    timeoutSeconds: number = 15
  ): Observable<ErrorExceptionResult<CoreLogMicroServicePingModel>> {
    const url = `${this.getControllerUrl()}/Ping/${encodeURIComponent(appInfoFilter)}?timeoutSeconds=${timeoutSeconds}`;
    return this.http
      .post(url, {}, { headers: this.getHeaders() })
      .pipe(
        retry(this.configApiRetry),
        map((ret: any) => ret)
      );
  }

  /**
   * ارسال دستور به میکروسرویس
   * @param appInfoFilter شناسه صف (مثال: MagfaSms)
   * @param command دستور (commandType, payloadJson)
   */
  ServiceSendCommand(
    appInfoFilter: string,
    command: MicroServiceCommandRequestDtoModel
  ): Observable<ErrorExceptionResultBase> {
    const url = `${this.getControllerUrl()}/Command/${encodeURIComponent(appInfoFilter)}`;
    return this.http
      .post(url, command || {}, { headers: this.getHeaders() })
      .pipe(
        retry(this.configApiRetry),
        map((ret: any) => ret)
      );
  }
}
