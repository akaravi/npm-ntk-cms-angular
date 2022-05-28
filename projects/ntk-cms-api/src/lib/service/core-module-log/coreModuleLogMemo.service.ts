
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleLogMemoModel } from '../../models/entity/core-module-log/coreModuleLogMemoModel';
import { CoreModuleMemoDtoModel } from '../../models/dto/core-module/coreModuleMemoDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class CoreModuleLogMemoService extends ApiCmsServerBase<CoreModuleLogMemoModel, string>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogMemo';
  }
  ServiceAddMemo(model: CoreModuleMemoDtoModel): Observable<ErrorExceptionResult<CoreModuleLogMemoModel>> {
    if (model == null) {
      model = new CoreModuleMemoDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddMemo', model, {
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

