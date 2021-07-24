import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { SmsMainApiPathPrivateSiteConfigModel } from '../../models/entity/sms/smsMainApiPathPrivateSiteConfigModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { SmsMainApiPathPrivateSiteConfigAliasJsonModel } from '../../models/entity/sms/smsMainApiPathPrivateSiteConfigAliasJsonModel';


@Injectable({
  providedIn: 'root',
})
export class SmsMainApiPathPrivateSiteConfigService extends ApiCmsServerBase<
  SmsMainApiPathPrivateSiteConfigModel,
  number
> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPrivateSiteConfig';
  }
  ServiceGetOneWithJsonFormatter(id: number): Observable<ErrorExceptionResult<SmsMainApiPathPrivateSiteConfigAliasJsonModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetOneWithJsonFormatter/' + id, {
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
