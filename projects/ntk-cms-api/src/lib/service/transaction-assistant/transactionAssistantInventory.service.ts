import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { transactionAssistantInventoryModel } from '../../models/entity/transaction-assistant/transactionAssistantInventoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantInventoryService extends ApiCmsServerBase<
  transactionAssistantInventoryModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantInventory';
  }

  /**
   * بررسی موجودی محصول
   */
  ServiceCheckAvailability(
    productId: string,
    supplierId?: string,
    requestedQty?: number,
    originProvinceId?: number
  ): Observable<ErrorExceptionResult<transactionAssistantInventoryModel>> {
    const request = {
      ProductId: productId,
      SupplierId: supplierId,
      RequestedQty: requestedQty,
      OriginProvinceId: originProvinceId,
    };

    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/check-availability',
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
   * رزرو موجودی
   */
  ServiceReserveStock(
    inventoryId: string,
    qty: number
  ): Observable<ErrorExceptionResult<transactionAssistantInventoryModel>> {
    const request = {
      Qty: qty,
    };

    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          inventoryId +
          '/reserve',
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
   * آزاد کردن موجودی
   */
  ServiceReleaseStock(
    inventoryId: string,
    qty: number
  ): Observable<ErrorExceptionResult<transactionAssistantInventoryModel>> {
    const request = {
      Qty: qty,
    };

    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          inventoryId +
          '/release',
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
   * به‌روزرسانی موجودی
   */
  ServiceUpdateStock(
    inventoryId: string,
    newStockQty: number
  ): Observable<ErrorExceptionResult<transactionAssistantInventoryModel>> {
    const request = {
      NewStockQty: newStockQty,
    };

    return this.http
      .put(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/' +
          inventoryId +
          '/stock',
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
   * دریافت موجودی‌های یک محصول
   */
  ServiceGetProductInventories(
    productId: string,
    supplierId?: string,
    originProvinceId?: number
  ): Observable<ErrorExceptionResult<transactionAssistantInventoryModel>> {
    let url =
      this.getBaseUrl() +
      this.getModuleControllerUrl() +
      '/product/' +
      productId;
    const params: string[] = [];

    if (supplierId) {
      params.push('supplierId=' + supplierId);
    }
    if (originProvinceId != null) {
      params.push('originProvinceId=' + originProvinceId);
    }

    if (params.length > 0) {
      url += '?' + params.join('&');
    }

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
}
