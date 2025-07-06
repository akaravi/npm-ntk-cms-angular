import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoEnumModel } from '../../models/entity/base/infoEnumModel';
import { ApiServerBase } from '../base/apiServerBase.service';


@Injectable()
export class LinkManagementEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'LinkManagementEnum';
  }

  ServiceSharingPriceTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/SharingPriceTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceManagementContentSettingTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ManagementContentSettingTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceSharingAccountingTypeEnum(): Observable<ErrorExceptionResult<InfoEnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/SharingAccountingTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}
