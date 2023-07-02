import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { CoreModuleEntityModel } from '../../models/entity/core-main/coreModuleEntityModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleEntityService extends ApiCmsServerBase<CoreModuleEntityModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreModuleEntity';
  }
  ServiceAutoAdd(): Observable<ErrorExceptionResult<CoreModuleEntityModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/AutoAdd/', {
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
