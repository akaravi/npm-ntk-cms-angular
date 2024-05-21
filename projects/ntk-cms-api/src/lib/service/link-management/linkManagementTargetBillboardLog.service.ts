
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { LinkManagementTargetBillboardLogModel } from '../../models/entity/link-management/linkManagementTargetBillboardLogModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class LinkManagementTargetBillboardLogService extends ApiCmsServerBase<LinkManagementTargetBillboardLogModel, string, FilterModel> {
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
