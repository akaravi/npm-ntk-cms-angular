import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { transactionAssistantProductRequestViewModel } from '../../models/entity/transaction-assistant/transactionAssistantProductRequestViewModel';
import { transactionAssistantRequestStatusEnum } from '../../models/enums/transaction-assistant/transactionAssistantRequestStatusEnum';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantRequestService extends ApiCmsServerBase<
  transactionAssistantProductRequestViewModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantRequest';
  }

  /**
   * به‌روزرسانی وضعیت درخواست
   */
  ServiceUpdateRequestStatus(
    requestId: string,
    newStatus: transactionAssistantRequestStatusEnum
  ): Observable<ErrorExceptionResult<transactionAssistantProductRequestViewModel>> {
    return this.http
      .put(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/' + requestId + '/status',
        newStatus,
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

  /**
   * دریافت درخواست‌های یک کاربر
   */
  ServiceGetUserRequests(userId?: number): Observable<ErrorExceptionResult<transactionAssistantProductRequestViewModel>> {
    const url = userId != null
      ? this.getBaseUrl() + this.getModuleControllerUrl() + '/user/' + userId
      : this.getBaseUrl() + this.getModuleControllerUrl() + '/user';
    
    return this.http
      .get(url, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        map((ret: any) => {
          return ret;
        })
      );
  }

  /**
   * دریافت درخواست‌های در انتظار بررسی
   */
  ServiceGetPendingRequests(): Observable<ErrorExceptionResult<transactionAssistantProductRequestViewModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/pending',
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

  /**
   * هماهنگی درخواست با تامین‌کنندگان
   */
  ServiceMatchWithSuppliers(requestId: string): Observable<ErrorExceptionResult<transactionAssistantProductRequestViewModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/' + requestId + '/match',
        {},
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

