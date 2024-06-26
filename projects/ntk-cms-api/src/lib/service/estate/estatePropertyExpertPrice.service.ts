import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { EstatePriceInquiryDtoModel } from '../../models/dto/estate/estatePriceInquiryDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyExpertPriceModel } from '../../models/entity/estate/estatePropertyExpertPriceModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';



@Injectable()
export class EstatePropertyExpertPriceService extends ApiCmsServerBase<EstatePropertyExpertPriceModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstatePropertyExpertPrice';
  }
  ServicePriceInquiryList(model: EstatePriceInquiryDtoModel): Observable<ErrorExceptionResult<EstatePropertyExpertPriceModel>> {
    if (model == null) {
      model = new EstatePriceInquiryDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/PriceInquiryList', model, {
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

  ServicePriceInquiryCalculate(model: EstatePriceInquiryDtoModel): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = new EstatePriceInquiryDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/PriceInquiryCalculate', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
}
