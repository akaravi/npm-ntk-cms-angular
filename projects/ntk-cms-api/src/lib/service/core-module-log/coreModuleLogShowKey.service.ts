
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CoreModuleShowKeyDtoModel } from '../../models/dto/core-module/coreModuleShowKeyDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleLogShowKeyModel } from '../../models/entity/core-module-log/coreModuleLogShowKeyModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreModuleLogShowKeyService extends ApiCmsServerBase<CoreModuleLogShowKeyModel, string, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreModuleLogShowKey';
    }
  ServiceAddShowKey(model: CoreModuleShowKeyDtoModel): Observable<ErrorExceptionResult<CoreModuleLogShowKeyModel>> {
    if (model == null) {
      model = new CoreModuleShowKeyDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddShowKey', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}

