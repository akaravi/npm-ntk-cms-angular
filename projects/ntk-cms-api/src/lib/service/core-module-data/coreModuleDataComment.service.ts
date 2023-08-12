
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleDataCommentModel } from '../../models/entity/core-module-data/coreModuleDataCommentModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CoreModuleDataCommentDtoModel } from '../../models/dto/core-module/coreModuleDataCommentDtoModel';



@Injectable()
export class CoreModuleDataCommentService extends ApiCmsServerBase<CoreModuleDataCommentModel, string, FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreModuleDataComment';
  }
  ServiceAddComment(model: CoreModuleDataCommentDtoModel): Observable<ErrorExceptionResult<CoreModuleDataCommentModel>> {
    if (model == null) {
      model = new CoreModuleDataCommentDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddComment', model, {
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

