import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { transactionAssistantCartModel } from '../../models/entity/transaction-assistant/transactionAssistantCartModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantCartService extends ApiCmsServerBase<
  transactionAssistantCartModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantCart';
  }

  /**
   * دریافت یا ایجاد سبد خرید کاربر
   */
  ServiceGetOrCreateUserCart(
    userId?: number
  ): Observable<ErrorExceptionResult<transactionAssistantCartModel>> {
    const url =
      userId != null
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
   * محاسبه مجموع قیمت سبد خرید
   */
  ServiceCalculateCartTotal(
    cartId: string
  ): Observable<ErrorExceptionResult<transactionAssistantCartModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          cartId +
          '/total',
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
   * قفل کردن سبد خرید
   */
  ServiceLockCart(
    cartId: string
  ): Observable<ErrorExceptionResult<transactionAssistantCartModel>> {
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          cartId +
          '/lock',
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

  /**
   * باز کردن قفل سبد خرید
   */
  ServiceUnlockCart(
    cartId: string
  ): Observable<ErrorExceptionResult<transactionAssistantCartModel>> {
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          cartId +
          '/unlock',
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

  /**
   * بستن سبد خرید
   */
  ServiceCloseCart(
    cartId: string
  ): Observable<ErrorExceptionResult<transactionAssistantCartModel>> {
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          cartId +
          '/close',
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
