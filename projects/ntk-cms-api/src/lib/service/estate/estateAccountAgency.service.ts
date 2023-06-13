
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAccountAgencyModel } from '../../models/entity/estate/estateAccountAgencyModel';
import { EstateAccountAgencySearchDtoModel } from '../../models/dto/estate/estateAccountAgencySearchDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable, map, retry } from 'rxjs';

@Injectable()
export class EstateAccountAgencyService extends ApiCmsServerBase<EstateAccountAgencyModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateAccountAgency';
  }
  ServiceGetAllWithFilter(model: EstateAccountAgencySearchDtoModel): Observable<ErrorExceptionResult<EstateAccountAgencyModel>> {
    if (model == null) {
      model = new EstateAccountAgencySearchDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithFilter/' , model, {
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
