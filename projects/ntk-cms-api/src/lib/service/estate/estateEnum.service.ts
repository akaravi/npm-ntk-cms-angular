import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoEnumModel } from '../../models/entity/base/infoEnumModel';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class EstateEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'EstateEnum';
  }



  ServiceEstateUserTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/EstateUserTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEstatePropertyExpertPriceTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
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
  ServiceEstateActivityStatusEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/EstateActivityStatusEnum', {
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
