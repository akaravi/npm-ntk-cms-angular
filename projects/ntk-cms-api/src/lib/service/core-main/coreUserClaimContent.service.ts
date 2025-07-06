import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CoreUserClaimCheckDtoModel } from '../../models/dto/core-main/coreUserClaimCheckDtoModel';
import { CoreUserClaimCheckModel } from '../../models/dto/core-main/coreUserClaimCheckModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserClaimContentModel } from '../../models/entity/core-main/coreUserClaimContentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreUserClaimContentService extends ApiCmsServerBase<CoreUserClaimContentModel, number, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreUserClaimContent';
    }
  ServiceClaimCheck(model: CoreUserClaimCheckDtoModel): Observable<ErrorExceptionResult<CoreUserClaimCheckModel>> {
    if (model == null) {
      model = new CoreUserClaimCheckDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ClaimCheck', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceClaimCheckCurrent(): Observable<ErrorExceptionResult<CoreUserClaimCheckModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ClaimCheck', {
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
