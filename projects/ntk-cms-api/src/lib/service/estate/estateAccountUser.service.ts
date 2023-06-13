
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAccountUserModel } from '../../models/entity/estate/estateAccountUserModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable, map, retry } from 'rxjs';
import { EstateAccountUserSearchDtoModel } from '../../models/dto/estate/estateAccountUserSearchDtoModel';

@Injectable()
export class EstateAccountUserService extends ApiCmsServerBase<EstateAccountUserModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateAccountUser';
  }
  ServiceGetAllWithFilter(model: EstateAccountUserSearchDtoModel): Observable<ErrorExceptionResult<EstateAccountUserModel>> {
    if (model == null) {
      model = new EstateAccountUserSearchDtoModel();
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
