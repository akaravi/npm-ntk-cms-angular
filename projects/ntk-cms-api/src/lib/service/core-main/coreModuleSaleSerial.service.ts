import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSaleSerialModel } from '../../models/entity/core-main/coreModuleSaleSerialModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';
import { CoreModuleCheckSerialForSiteDtoModel } from '../../models/dto/core-main/coreModuleCheckSerialForSiteDtoModel';
import { CoreModuleSaleInvoiceDetailModel } from '../../models/entity/core-main/coreModuleSaleInvoiceDetailModel';
import { CoreModuleSaleInvoiceModel } from '../../models/entity/core-main/coreModuleSaleInvoiceModel';


@Injectable()
export class CoreModuleSaleSerialService extends ApiCmsServerBase<CoreModuleSaleSerialModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreModuleSaleSerial';
  }
  ServiceCheckUseSerialForSite(model: CoreModuleCheckSerialForSiteDtoModel):
    Observable<ErrorExceptionResult<CoreModuleSaleInvoiceDetailModel>> {
    if (!model) {
      model = new CoreModuleCheckSerialForSiteDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/CheckUseSerialForSite', model, {
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
    Observable<ErrorExceptionResult<CoreModuleSaleInvoiceModel>> {
    if (!model) {
      model = new CoreModuleCheckSerialForSiteDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/RegisterUseSerialForSite', model, {
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
