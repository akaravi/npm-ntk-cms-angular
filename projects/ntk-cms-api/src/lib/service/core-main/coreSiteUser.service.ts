import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreSiteUserModel } from '../../models/entity/core-main/coreSiteUserModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreSiteUserService extends ApiCmsServerBase<CoreSiteUserModel, number, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreSiteUser';
    }

  ServiceGetAllSiteCurrentUser(): Observable<ErrorExceptionResult<CoreSiteUserModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllSiteCurrentUser', {
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
