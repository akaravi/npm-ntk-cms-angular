
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateAccountAgencyModel } from '../../models/entity/estate/estateAccountAgencyModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable, map, retry } from 'rxjs';
import { EstateAccountAgencyFilterModel } from '../../models/dto/estate/estateAccountAgencyFilterModel';

@Injectable()
export class EstateAccountAgencyService extends ApiCmsServerBase<EstateAccountAgencyModel, string, EstateAccountAgencyFilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstateAccountAgency';
  }
  ServiceGetAllWithFilter(model: EstateAccountAgencyFilterModel): Observable<ErrorExceptionResult<EstateAccountAgencyModel>> {
    if (model == null) {
      model = new EstateAccountAgencyFilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithFilter/', model, {
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
