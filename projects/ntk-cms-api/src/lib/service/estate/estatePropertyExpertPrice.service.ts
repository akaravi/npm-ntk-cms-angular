import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { EstatePriceInquiryDtoModel } from '../../models/dto/estate/estatePriceInquiryDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { EstatePropertyExpertPriceModel } from '../../models/entity/estate/estatePropertyExpertPriceModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { EstatePropertyExpertPriceFilterModel } from '../../models/filters/estate/estatePropertyExpertPriceFilterModel';



@Injectable()
export class EstatePropertyExpertPriceService extends ApiCmsServerBase<EstatePropertyExpertPriceModel, string, EstatePropertyExpertPriceFilterModel> {
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
        
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
}
