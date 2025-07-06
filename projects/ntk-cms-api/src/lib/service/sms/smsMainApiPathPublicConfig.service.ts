import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiPathPublicConfigAliasJsonModel } from '../../models/entity/sms/smsMainApiPathPublicConfigAliasJsonModel';
import { SmsMainApiPathPublicConfigModel } from '../../models/entity/sms/smsMainApiPathPublicConfigModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsMainApiPathPublicConfigService extends ApiCmsServerBase<SmsMainApiPathPublicConfigModel, string, FilterModel> {
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
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
