
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { LinkManagementTargetShortLinkGetDtoModel } from '../../models/dto/linkManagement/linkManagementTargetShortLinkGetDtoModel';
import { LinkManagementTargetShortLinkGetResponceModel } from '../../models/dto/linkManagement/linkManagementTargetShortLinkGetResponceModel';
import { LinkManagementTargetShortLinkSetDtoModel } from '../../models/dto/linkManagement/linkManagementTargetShortLinkSetDtoModel';
import { LinkManagementTargetShortLinkSetResponceModel } from '../../models/dto/linkManagement/linkManagementTargetShortLinkSetResponceModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { LinkManagementTargetModel } from '../../models/entity/link-management/linkManagementTargetModel';


@Injectable()
export class LinkManagementTargetService extends ApiCmsServerBase<LinkManagementTargetModel, number,FilterModel>  {
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
