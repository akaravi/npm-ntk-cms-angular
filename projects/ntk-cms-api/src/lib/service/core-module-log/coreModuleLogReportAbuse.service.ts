import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CoreModuleReportAbuseDtoModel } from '../../models/dto/core-module/coreModuleReportAbuseDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleLogReportAbuseModel } from '../../models/entity/core-module-log/coreModuleLogReportAbuseModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreModuleLogReportAbuseService extends ApiCmsServerBase<
  CoreModuleLogReportAbuseModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'CoreModuleLogReportAbuse';
  }
  ServiceAddReportAbuse(
    model: CoreModuleReportAbuseDtoModel
  ): Observable<ErrorExceptionResult<CoreModuleLogReportAbuseModel>> {
    if (model == null) {
      model = new CoreModuleReportAbuseDtoModel();
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/AddReportAbuse',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
}
