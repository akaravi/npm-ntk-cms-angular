import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleSaleSerialModel } from '../../models/entity/core-main/coreModuleSaleSerialModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';
import { CoreModuleCheckSerialForSiteDtoModel } from '../../models/dto/core/coreModuleCheckSerialForSiteDtoModel';
import { CoreModuleSaleInvoiceDetailModel } from '../../models/entity/core-main/coreModuleSaleInvoiceDetailModel';


@Injectable()
export class CoreModuleSaleSerialService extends ApiCmsServerBase<CoreModuleSaleSerialModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'CoreModuleSaleSerial';
  }
  ServiceCheckUseSerialForSite(model: CoreModuleCheckSerialForSiteDtoModel):
    Observable<ErrorExceptionResult<CoreModuleSaleInvoiceDetailModel>> {
    if (!model) {
      model = new CoreModuleCheckSerialForSiteDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CheckUseSerialForSite', model, {
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
  ServiceRegisterUseSerialForSite(model: CoreModuleCheckSerialForSiteDtoModel):
    Observable<ErrorExceptionResult<CoreModuleSaleSerialModel>> {
    if (!model) {
      model = new CoreModuleCheckSerialForSiteDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/RegisterUseSerialForSite', model, {
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
