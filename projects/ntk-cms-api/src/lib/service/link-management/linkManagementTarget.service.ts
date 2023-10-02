
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { LinkManagementTargetShortLinkGetDtoModel } from '../../models/dto/link-management/linkManagementTargetShortLinkGetDtoModel';
import { LinkManagementTargetShortLinkGetResponceModel } from '../../models/dto/link-management/linkManagementTargetShortLinkGetResponceModel';
import { LinkManagementTargetShortLinkSetDtoModel } from '../../models/dto/link-management/linkManagementTargetShortLinkSetDtoModel';
import { LinkManagementTargetShortLinkSetResponceModel } from '../../models/dto/link-management/linkManagementTargetShortLinkSetResponceModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { LinkManagementTargetModel } from '../../models/entity/link-management/linkManagementTargetModel';
import { LinkManagementTargetFilterModel } from '../../models/filters/link-management/linkManagementTargetFilterModel';


@Injectable()
export class LinkManagementTargetService extends ApiCmsServerBase<LinkManagementTargetModel, number, LinkManagementTargetFilterModel>  {
  getModuleControllerUrl(): string {
    return 'LinkManagementTarget';
  }
  ServiceGetOneByKey(key: string): Observable<ErrorExceptionResult<LinkManagementTargetShortLinkGetResponceModel>> {
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
  ServiceShortLinkSet(
    model: LinkManagementTargetShortLinkSetDtoModel,
  ): Observable<ErrorExceptionResult<LinkManagementTargetShortLinkSetResponceModel>> {
    if (model == null) {
      model = new LinkManagementTargetShortLinkSetDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ShortLinkSet/', model, {
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
  ServiceShortLinkGet(
    model: LinkManagementTargetShortLinkGetDtoModel,
  ): Observable<ErrorExceptionResult<LinkManagementTargetShortLinkGetResponceModel>> {
    if (model == null) {
      model = new LinkManagementTargetShortLinkGetDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ShortLinkGet/', model, {
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
