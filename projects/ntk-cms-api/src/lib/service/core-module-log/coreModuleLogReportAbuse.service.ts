
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleLogReportAbuseModel } from '../../models/entity/core-module-log/coreModuleLogReportAbuseModel';
import { CoreModuleReportAbuseDtoModel } from '../../models/dto/core-module/coreModuleReportAbuseDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class CoreModuleLogReportAbuseService extends ApiCmsServerBase<CoreModuleLogReportAbuseModel, string>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogReportAbuse';
  }
  ServiceAddReportAbuse(model: CoreModuleReportAbuseDtoModel): Observable<ErrorExceptionResult<CoreModuleLogReportAbuseModel>> {
    if (model == null) {
      model = new CoreModuleReportAbuseDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddReportAbuse', model, {
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
  ServiceRemoveReportAbuse(model: CoreModuleReportAbuseDtoModel): Observable<ErrorExceptionResult<CoreModuleLogReportAbuseModel>> {
    if (model == null) {
      model = new CoreModuleReportAbuseDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/RemoveReportAbuse', model, {
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

