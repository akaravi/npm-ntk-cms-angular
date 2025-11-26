import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleEntityModel } from '../../models/entity/core-main/coreModuleEntityModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreModuleEntityService extends ApiCmsServerBase<
  CoreModuleEntityModel,
  number,
  FilterModel
> {
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

        map((ret: any) => {
          return ret;
        })
      );
  }
}
