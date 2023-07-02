import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathPublicConfigModel } from '../../models/entity/sms/smsMainApiPathPublicConfigModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { SmsMainApiPathPublicConfigAliasJsonModel } from '../../models/entity/sms/smsMainApiPathPublicConfigAliasJsonModel';


@Injectable()
export class SmsMainApiPathPublicConfigService extends ApiCmsServerBase<SmsMainApiPathPublicConfigModel, string,FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathPublicConfig';
  }
  ServiceGetOneWithJsonFormatter(id: string): Observable<ErrorExceptionResult<SmsMainApiPathPublicConfigAliasJsonModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetOneWithJsonFormatter/' + id, {
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
  ServiceAutoAdd(): Observable<ErrorExceptionResult<SmsMainApiPathPublicConfigModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/AutoAdd/', {
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
