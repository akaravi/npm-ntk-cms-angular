
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleDataCommentModel } from '../../models/entity/core-module-data/coreModuleDataCommentModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CoreModuleCommentDtoModel } from '../../models/dto/core-module/coreModuleCommentDtoModel';


@Injectable()
export class CoreModuleDataCommentService extends ApiCmsServerBase<CoreModuleDataCommentModel, string, FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreModuleDataComment';
  }
  ServiceAddComment(model: CoreModuleCommentDtoModel): Observable<ErrorExceptionResult<CoreModuleDataCommentModel>> {
    if (model == null) {
      model = new CoreModuleCommentDtoModel();
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

