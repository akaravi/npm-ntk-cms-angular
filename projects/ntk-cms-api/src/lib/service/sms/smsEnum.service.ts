import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoEnumModel } from '../../models/entity/base/infoEnumModel';
import { ApiServerBase } from '../base/apiServerBase.service';

@Injectable()
export class SmsEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'SmsEnum';
  }

  ServiceSmsApiNumberPermissionAccessStatusEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SmsApiNumberPermissionAccessStatusEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceSmsApiNumberPermissionActionEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SmsApiNumberPermissionActionEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceSmsApiPathPermissionAccessStatusEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SmsApiPathPermissionAccessStatusEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceSmsApiPathPermissionActionEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SmsApiPathPermissionActionEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceSmsMessageTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SmsMessageTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceSmsOutBoxTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SmsOutBoxTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceSmsProcessFlowRecordStatusEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SmsProcessFlowRecordStatusEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceSmsProcessFlowSmsStatusEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SmsProcessFlowSmsStatusEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceSmsRecordStatusOutBoxEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SmsRecordStatusOutBoxEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
}
