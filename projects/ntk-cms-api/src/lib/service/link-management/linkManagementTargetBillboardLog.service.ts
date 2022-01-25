
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { LinkManagementTargetBillboardLogModel } from '../../models/entity/link-management/linkManagementTargetBillboardLogModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class LinkManagementTargetBillboardLogService extends ApiCmsServerBase<LinkManagementTargetBillboardLogModel, string>  {
  getModuleControllerUrl(): string {
    return 'LinkManagementTargetBillboardLog';
  }

  ServiceGetAllByKey(key: string, model: FilterModel): Observable<ErrorExceptionResult<LinkManagementTargetBillboardLogModel>> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new FilterModel();
    }
    if (!key || key.length === 0) {
      key = '---';
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/getAll/' + key, model, {
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
