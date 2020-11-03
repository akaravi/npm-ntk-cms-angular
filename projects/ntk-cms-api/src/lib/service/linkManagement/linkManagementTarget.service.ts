
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { LinkManagementTargetShortLinkGetDtoModel } from '../../dtoModels/linkManagement/linkManagementTargetShortLinkGetDtoModel';
import { LinkManagementTargetShortLinkGetResponceModel } from '../../dtoModels/linkManagement/linkManagementTargetShortLinkGetResponceModel';
import { LinkManagementTargetShortLinkSetDtoModel } from '../../dtoModels/linkManagement/linkManagementTargetShortLinkSetDtoModel';
import { LinkManagementTargetShortLinkSetResponceModel } from '../../dtoModels/linkManagement/linkManagementTargetShortLinkSetResponceModel';
import { ErrorExcptionResult } from '../../models/base/errorExcptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class LinkManagementTargetService extends ApiCmsServerBase<any, number>  {


  getModuleCotrolerUrl(): string {
    return 'LinkManagementTarget';
  }

  ServiceShortLinkSet(
    model: LinkManagementTargetShortLinkSetDtoModel,
  ): Observable<ErrorExcptionResult<LinkManagementTargetShortLinkSetResponceModel>> {
    if (model == null) {
      model = new LinkManagementTargetShortLinkSetDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ShortLinkSet/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<LinkManagementTargetShortLinkSetResponceModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceShortLinkGet(
    model: LinkManagementTargetShortLinkGetDtoModel,
  ): Observable<ErrorExcptionResult<LinkManagementTargetShortLinkGetResponceModel>> {
    if (model == null) {
      model = new LinkManagementTargetShortLinkGetDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ShortLinkGet/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<LinkManagementTargetShortLinkGetResponceModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
