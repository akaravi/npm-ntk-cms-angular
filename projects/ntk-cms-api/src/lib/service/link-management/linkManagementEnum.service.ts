import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoModelEnum } from '../../models/entity/base/infoModelEnum';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class LinkManagementEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'LinkManagementEnum';
  }

  ServiceEnumSharingPriceType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/SharingPriceTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEnumManagementContentSettingType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ManagementContentSettingTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEnumSharingAccountingType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/SharingAccountingTypeEnum', {
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
