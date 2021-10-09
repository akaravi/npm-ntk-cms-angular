import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';
import { Injectable } from '@angular/core';
import {
  CoreModuleConfigAdminMainValuesModel,
  CoreModuleConfigSiteAccessValuesModel,
  CoreModuleConfigSiteValuesModel,
  CoreModuleSiteStorageValuesModel
} from '../../models/entity/core-main/coreConfigurationModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class CoreConfigurationService extends
  ApiServerConfigSiteBase<CoreModuleConfigAdminMainValuesModel,
  CoreModuleConfigSiteValuesModel,
  CoreModuleConfigSiteAccessValuesModel,
  CoreModuleSiteStorageValuesModel>   {
  getModuleCotrolerUrl(): string {
    return 'Core';
  }
  ServiceUserMembershipRule(): Observable<ErrorExceptionResult<string>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/UserMembershipRule', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}
