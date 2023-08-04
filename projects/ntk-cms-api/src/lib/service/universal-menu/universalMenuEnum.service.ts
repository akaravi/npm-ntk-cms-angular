import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoModelEnum } from '../../models/entity/base/infoModelEnum';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class UniversalMenuEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'UniversalMenuEnum';
  }

  ServiceEnumUniversalMenuPlatformType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/UniversalMenuPlatformTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEnumUniversalMenuRenderType(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/UniversalMenuRenderTypeEnum', {
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
