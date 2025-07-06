
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CoreModuleDataMemoDtoModel } from '../../models/dto/core-module/coreModuleDataMemoDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleDataMemoModel } from '../../models/entity/core-module-data/coreModuleDataMemoModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreModuleDataMemoService extends ApiCmsServerBase<CoreModuleDataMemoModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreModuleDataMemo';
  }
  ServiceAddMemo(model: CoreModuleDataMemoDtoModel): Observable<ErrorExceptionResult<CoreModuleDataMemoModel>> {
    if (model == null) {
      model = new CoreModuleDataMemoDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddMemo', model, {
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

