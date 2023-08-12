
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CoreModuleDataPinDtoModel } from '../../models/dto/core-module/coreModuleDataPinDtoModel';
import { CoreModuleDataPinModel } from '../../models/entity/core-module-data/coreModuleDataPinModel';


@Injectable()
export class CoreModuleDataPinService extends ApiCmsServerBase<CoreModuleDataPinModel, string, FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreModuleDataPin';
  }
  ServiceAddPin(model: CoreModuleDataPinDtoModel): Observable<ErrorExceptionResult<CoreModuleDataPinModel>> {
    if (model == null) {
      model = new CoreModuleDataPinDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddPin', model, {
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

