
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { LinkManagementBillboardModel } from '../../models/entity/link-management/linkManagementBillboardModel';
import { LinkManagementBillboardFilterModel } from '../../models/filters/link-management/linkManagementBillboardFilterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class LinkManagementBillboardService extends ApiCmsServerBase<LinkManagementBillboardModel, number, LinkManagementBillboardFilterModel> {
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
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
