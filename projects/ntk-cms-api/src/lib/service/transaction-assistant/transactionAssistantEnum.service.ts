import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoEnumModel } from '../../models/entity/base/infoEnumModel';
import { ApiServerBase } from '../base/apiServerBase.service';

@Injectable()
export class TransactionAssistantEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantEnum';
  }

  /**
   * دریافت اطلاعات Enum وضعیت درخواست
   */
  ServiceTransactionRequestStatusEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TransactionRequestStatusEnum',
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

  /**
   * دریافت اطلاعات Enum وضعیت پیشنهاد
   */
  ServiceTransactionOfferStatusEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TransactionOfferStatusEnum',
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

  /**
   * دریافت اطلاعات Enum وضعیت سبد خرید
   */
  ServiceTransactionCartStatusEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TransactionCartStatusEnum',
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

  /**
   * دریافت اطلاعات Enum وضعیت سفارش
   */
  ServiceTransactionOrderStatusEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TransactionOrderStatusEnum',
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

  /**
   * دریافت اطلاعات Enum نوع سفارش
   */
  ServiceTransactionOrderTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TransactionOrderTypeEnum',
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

  /**
   * دریافت اطلاعات Enum نوع تحویل صادراتی
   */
  ServiceTransactionExportDeliveryTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TransactionExportDeliveryTypeEnum',
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

  /**
   * دریافت اطلاعات Enum وضعیت ارسال
   */
  ServiceTransactionShipmentStatusEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TransactionShipmentStatusEnum',
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

  /**
   * دریافت اطلاعات Enum وضعیت گمرکی
   */
  ServiceTransactionCustomsStatusEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TransactionCustomsStatusEnum',
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

  /**
   * دریافت اطلاعات Enum وضعیت پرداخت
   */
  ServiceTransactionPaymentStatusEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TransactionPaymentStatusEnum',
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

  /**
   * دریافت اطلاعات Enum روش پرداخت
   */
  ServiceTransactionPaymentMethodEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TransactionPaymentMethodEnum',
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

  /**
   * دریافت اطلاعات Enum نوع شخص
   */
  ServiceTransactionPersonTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TransactionPersonTypeEnum',
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

