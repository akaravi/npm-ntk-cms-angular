
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { LinkManagementTargetShortLinkGetDtoModel } from '../../models/dto/linkManagement/linkManagementTargetShortLinkGetDtoModel';
import { LinkManagementTargetShortLinkGetResponceModel } from '../../models/dto/linkManagement/linkManagementTargetShortLinkGetResponceModel';
import { LinkManagementTargetShortLinkSetDtoModel } from '../../models/dto/linkManagement/linkManagementTargetShortLinkSetDtoModel';
import { LinkManagementTargetShortLinkSetResponceModel } from '../../models/dto/linkManagement/linkManagementTargetShortLinkSetResponceModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class LinkManagementTargetService extends ApiCmsServerBase<any, number>  {


  getModuleCotrolerUrl(): string {
    return 'LinkManagementTarget';
  }

  ServiceShortLinkSet(
    model: LinkManagementTargetShortLinkSetDtoModel,
  ): Observable<ErrorExceptionResult<LinkManagementTargetShortLinkSetResponceModel>> {
    if (model == null) {
      model = new LinkManagementTargetShortLinkSetDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ShortLinkSet/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<LinkManagementTargetShortLinkSetResponceModel>) => {
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
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ShortLinkGet/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<LinkManagementTargetShortLinkGetResponceModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
