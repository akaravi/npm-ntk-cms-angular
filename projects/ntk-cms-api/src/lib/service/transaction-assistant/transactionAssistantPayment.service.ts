import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { transactionAssistantPaymentModel } from '../../models/entity/transaction-assistant/transactionAssistantPaymentModel';
import { transactionAssistantPaymentMethodEnum } from '../../models/enums/transaction-assistant/transactionAssistantPaymentMethodEnum';
import { transactionAssistantPaymentStatusEnum } from '../../models/enums/transaction-assistant/transactionAssistantPaymentStatusEnum';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantPaymentService extends ApiCmsServerBase<
  transactionAssistantPaymentModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantPayment';
  }

  /**
   * دریافت پرداخت‌های یک سفارش
   */
  ServiceGetOrderPayments(
    orderId: string
  ): Observable<ErrorExceptionResult<transactionAssistantPaymentModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/order/' + orderId,
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
   * به‌روزرسانی وضعیت پرداخت
   */
  ServiceUpdatePaymentStatus(
    paymentId: string,
    status: transactionAssistantPaymentStatusEnum,
    gatewayReference?: string
  ): Observable<ErrorExceptionResult<transactionAssistantPaymentModel>> {
    const request = {
      Status: status,
      GatewayReference: gatewayReference || '',
    };

    return this.http
      .put(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          paymentId +
          '/status',
        request,
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
   * ایجاد پرداخت جدید برای سفارش
   */
  ServiceCreatePayment(
    orderId: string,
    method: transactionAssistantPaymentMethodEnum,
    amount: number
  ): Observable<ErrorExceptionResult<transactionAssistantPaymentModel>> {
    const request = {
      OrderId: orderId,
      Method: method,
      Amount: amount,
    };

    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/create',
        request,
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
