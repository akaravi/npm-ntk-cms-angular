import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { transactionAssistantAddressViewModel } from '../../models/entity/transaction-assistant/transactionAssistantAddressViewModel';
import { transactionAssistantAddressClientSideFilterModel } from '../../models/filters/transaction-assistant/transactionAssistantAddressClientSideFilterModel';
import { transactionAssistantAddressServerSideFilterModel } from '../../models/filters/transaction-assistant/transactionAssistantAddressServerSideFilterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantAddressService extends ApiCmsServerBase<
  transactionAssistantAddressViewModel,
  string,
  transactionAssistantAddressServerSideFilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantAddress';
  }

  /**
   * دریافت آدرس‌های کاربر
   */
  ServiceGetUserAddresses(userId: number): Observable<ErrorExceptionResult<transactionAssistantAddressViewModel>> {
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
  ServiceGetUserDefaultAddress(userId: number): Observable<ErrorExceptionResult<transactionAssistantAddressViewModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/user/' + userId + '/default',
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

