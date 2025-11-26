import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyShareSiteModel } from '../../models/entity/estate/estatePropertyShareSiteModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';

@Injectable()
export class EstatePropertyShareSiteService extends ApiCmsServerBase<
  EstatePropertyShareSiteModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'EstatePropertyShareSite';
  }
  ServiceJoinBySiteId(
    linkSitId: string,
    shareKey: string
  ): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/Join/' +
          linkSitId +
          '/' +
          shareKey,
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
  ServiceJoin(shareKey: string): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/Join/' + shareKey,
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
