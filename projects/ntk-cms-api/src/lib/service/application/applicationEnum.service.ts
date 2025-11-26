import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoEnumModel } from '../../models/entity/base/infoEnumModel';
import { ApiServerBase } from '../base/apiServerBase.service';

@Injectable()
export class ApplicationEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'ApplicationEnum';
  }

  ServiceNotificationTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/NotificationTypeEnum',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
}
