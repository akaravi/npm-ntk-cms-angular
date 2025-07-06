
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CoreModuleDataTaskDtoModel } from '../../models/dto/core-module/coreModuleDataTaskDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleDataTaskModel } from '../../models/entity/core-module-data/coreModuleDataTaskModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreModuleDataTaskService extends ApiCmsServerBase<CoreModuleDataTaskModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreModuleDataTask';
  }
  ServiceAddTask(model: CoreModuleDataTaskDtoModel): Observable<ErrorExceptionResult<CoreModuleDataTaskModel>> {
    if (model == null) {
      model = new CoreModuleDataTaskDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddTask', model, {
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

