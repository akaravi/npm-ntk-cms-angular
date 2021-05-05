import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleSaleHeaderModel } from '../../models/entity/core-main/coreModuleSaleHeaderModel';
import { CoreModuleSaleInvoiceDetailModel } from '../../models/entity/core-main/coreModuleSaleInvoiceDetailModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSaleHeaderCalculateDtoModel } from '../../models/dto/core/coreModuleSaleHeaderCalculateDtoModel';
import { CoreModuleSaleHeaderPaymentDtoModel } from '../../models/dto/core/coreModuleSaleHeaderPaymentDtoModel';


@Injectable()
export class CoreModuleSaleHeaderService extends ApiCmsServerBase<CoreModuleSaleHeaderModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'CoreModuleSaleHeader';
  }
  ServiceGetAllSale(model: FilterModel): Observable<ErrorExceptionResult<CoreModuleSaleHeaderModel>> {
    if (!model) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllSale', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceCheckUseHeaderForSite(id: number):
    Observable<ErrorExceptionResult<CoreModuleSaleInvoiceDetailModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CheckUseHeaderForSite/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceOrderCalculate(model: CoreModuleSaleHeaderCalculateDtoModel): Observable<ErrorExceptionResult<CoreModuleSaleInvoiceDetailModel>> {
    if (!model) {
      model = new CoreModuleSaleHeaderCalculateDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/OrderCalculate', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceOrderPayment(model: CoreModuleSaleHeaderPaymentDtoModel): Observable<ErrorExceptionResult<CoreModuleSaleInvoiceDetailModel>> {
    if (!model) {
      model = new CoreModuleSaleHeaderPaymentDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/OrderPayment', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}
