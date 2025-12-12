import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { TransactionAssistantAddressModel } from '../../models/entity/transaction-assistant/transactionAssistantAddressModel';
import { TransactionAssistantAddressServerSideFilterModel } from '../../models/filters/transaction-assistant/transactionAssistantAddressServerSideFilterModel';

@Injectable()
export class TransactionAssistantAddressService extends ApiCmsServerBase<
  TransactionAssistantAddressModel,
  string,
  TransactionAssistantAddressServerSideFilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantAddress';
  }

  /**
   * دریافت آدرس‌های کاربر
   */
  ServiceGetUserAddresses(
    userId: number
  ): Observable<ErrorExceptionResult<TransactionAssistantAddressModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/user/' + userId,
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
   * دریافت آدرس پیش‌فرض کاربر
   */
  ServiceGetUserDefaultAddress(
    userId: number
  ): Observable<ErrorExceptionResult<TransactionAssistantAddressModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/user/' +
          userId +
          '/default',
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
