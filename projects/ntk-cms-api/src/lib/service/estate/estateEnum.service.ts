import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { EnumInfoModel } from '../../models/entity/base/enumInfoModel';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class EstateEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'EstateEnum';
  }

 
 
    ServiceEnumEstateUserType(): Observable<ErrorExceptionResult<EnumInfoModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/EnumEstateUserType', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEstatePropertyExpertPriceTypeEnum(): Observable<ErrorExceptionResult<EnumInfoModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/EstatePropertyExpertPriceTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
