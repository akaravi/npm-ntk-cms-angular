
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateAccountUserModel } from '../../models/entity/estate/estateAccountUserModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable, map, retry } from 'rxjs';
import { EstateAccountUserFilterModel } from '../../models/dto/estate/estateAccountUserFilterModel';


@Injectable()
export class EstateAccountUserService extends ApiCmsServerBase<EstateAccountUserModel, string, EstateAccountUserFilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstateAccountUser';
  }
  ServiceGetAllWithFilter(model: EstateAccountUserFilterModel): Observable<ErrorExceptionResult<EstateAccountUserModel>> {
    if (model == null) {
      model = new EstateAccountUserFilterModel();
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
