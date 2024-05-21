
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyShareAgentModel } from '../../models/entity/estate/estatePropertyShareAgentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';


@Injectable()
export class EstatePropertyShareAgentService extends ApiCmsServerBase<EstatePropertyShareAgentModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstatePropertyShareAgent';
  }
  ServiceJoin(linkEstateAgentId: string, shareKey: string): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/Join/' + linkEstateAgentId + "/" + shareKey, {
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
