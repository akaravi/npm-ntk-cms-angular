import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { TransactionAssistantOrderModel } from '../../models/entity/transaction-assistant/transactionAssistantOrderModel';
import { TransactionAssistantOrderStatusEnum } from '../../models/enums/transaction-assistant/transactionAssistantOrderStatusEnum';
import { TransactionAssistantPaymentStatusEnum } from '../../models/enums/transaction-assistant/transactionAssistantPaymentStatusEnum';

@Injectable()
export class TransactionAssistantOrderService extends ApiCmsServerBase<
  TransactionAssistantOrderModel,
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
    newStatus: TransactionAssistantOrderStatusEnum
  ): Observable<ErrorExceptionResult<TransactionAssistantOrderModel>> {
    return this.http
      .put(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          orderId +
          '/status',
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
    newStatus: TransactionAssistantPaymentStatusEnum
  ): Observable<ErrorExceptionResult<TransactionAssistantOrderModel>> {
    return this.http
      .put(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          orderId +
          '/payment-status',
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
  ServiceGetOrderWithItems(
    orderId: string
  ): Observable<ErrorExceptionResult<TransactionAssistantOrderModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          orderId +
          '/with-items',
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
  ServiceRecalculateOrderTotal(
    orderId: string
  ): Observable<ErrorExceptionResult<TransactionAssistantOrderModel>> {
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          orderId +
          '/recalculate-total',
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
