import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IpModel } from '../../models/dto/core-main/ipModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import {
  CoreModuleConfigAdminMainValuesModel,
  CoreModuleConfigSiteAccessValuesModel,
  CoreModuleConfigSiteValuesModel,
  CoreModuleSiteStorageValuesModel,
} from '../../models/entity/core-main/coreConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class CoreConfigurationService extends ApiServerConfigSiteBase<
  CoreModuleConfigAdminMainValuesModel,
  CoreModuleConfigSiteValuesModel,
  CoreModuleConfigSiteAccessValuesModel,
  CoreModuleSiteStorageValuesModel
> {
  getModuleControllerUrl(): string {
    return 'Core';
  }
  ServiceUserMembershipRule(): Observable<ErrorExceptionResult<string>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/UserMembershipRule',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceIp(): Observable<IpModel> {
    return this.http
      .get(this.getBaseUrl() + 'ip', {
        headers: this.getHeaders(),
      })
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
}
