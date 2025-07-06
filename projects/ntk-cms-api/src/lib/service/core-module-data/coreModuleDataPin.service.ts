
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CoreModuleDataPinDtoModel } from '../../models/dto/core-module/coreModuleDataPinDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleDataPinModel } from '../../models/entity/core-module-data/coreModuleDataPinModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreModuleDataPinService extends ApiCmsServerBase<CoreModuleDataPinModel, string, FilterModel> {
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
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}

