
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { LinkManagementBillboardModel } from '../../models/entity/link-management/linkManagementBillboardModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class LinkManagementBillboardService extends ApiCmsServerBase<LinkManagementBillboardModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'LinkManagementBillboard';
  }
  ServiceGetOneByKey(key: string): Observable<ErrorExceptionResult<LinkManagementBillboardModel>> {
    if (!key || key.length === 0) {
      key = '---';
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetOneByKey/', key, {
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
