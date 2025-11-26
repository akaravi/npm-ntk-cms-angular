import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyShareAgencyModel } from '../../models/entity/estate/estatePropertyShareAgencyModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';

@Injectable()
export class EstatePropertyShareAgencyService extends ApiCmsServerBase<
  EstatePropertyShareAgencyModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'EstatePropertyShareAgency';
  }
  ServiceJoin(
    linkEstateAgencyId: string,
    shareKey: string
  ): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/Join/' +
          linkEstateAgencyId +
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
}
