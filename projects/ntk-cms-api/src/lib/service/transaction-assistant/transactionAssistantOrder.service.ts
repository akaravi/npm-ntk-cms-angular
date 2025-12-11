import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { transactionAssistantOrderViewModel } from '../../models/entity/transaction-assistant/transactionAssistantOrderViewModel';
import { transactionAssistantOrderStatusEnum } from '../../models/enums/transaction-assistant/transactionAssistantOrderStatusEnum';
import { transactionAssistantPaymentStatusEnum } from '../../models/enums/transaction-assistant/transactionAssistantPaymentStatusEnum';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantOrderService extends ApiCmsServerBase<
  transactionAssistantOrderViewModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantOrder';
  }

  /**
   * به‌روزرسانی وضعیت سفارش
   */
  ServiceUpdateOrderStatus(
    orderId: string,
    newStatus: transactionAssistantOrderStatusEnum
  ): Observable<ErrorExceptionResult<transactionAssistantOrderViewModel>> {
    return this.http
      .put(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/' + orderId + '/status',
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
   * به‌روزرسانی وضعیت پرداخت سفارش
   */
  ServiceUpdatePaymentStatus(
    orderId: string,
    newStatus: transactionAssistantPaymentStatusEnum
  ): Observable<ErrorExceptionResult<transactionAssistantOrderViewModel>> {
    return this.http
      .put(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/' + orderId + '/payment-status',
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
   * دریافت سفارش با آیتم‌هایش
   */
  ServiceGetOrderWithItems(orderId: string): Observable<ErrorExceptionResult<transactionAssistantOrderViewModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/' + orderId + '/with-items',
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
   * محاسبه مجدد مجموع قیمت سفارش
   */
  ServiceRecalculateOrderTotal(orderId: string): Observable<ErrorExceptionResult<transactionAssistantOrderViewModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/' + orderId + '/recalculate-total',
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

