
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyShareSiteModel } from '../../models/entity/estate/estatePropertyShareSiteModel';

import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';

@Injectable()
export class EstatePropertyShareSiteService extends ApiCmsServerBase<EstatePropertyShareSiteModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyShareSite';
  }
  ServiceJoinBySiteId(linkSitId: string, shareKey: string): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/Join/' + linkSitId + "/" + shareKey, {
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
  ServiceJoin( shareKey: string): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/Join/' + shareKey, {
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
