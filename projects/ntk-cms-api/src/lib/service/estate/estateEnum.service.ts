import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoModelEnum } from '../../models/entity/base/infoModelEnum';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class EstateEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'EstateEnum';
  }



  ServiceEstateUserTypeEnum(): Observable<ErrorExceptionResult<InfoModelEnum>> {
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
  ServiceEstatePropertyExpertPriceTypeEnum(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/PropertyExpertPriceTypeEnumEstate', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEstateActivityStatusEnum(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ActivityStatusEnumEstate', {
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
