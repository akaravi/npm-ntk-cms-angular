import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathPublicConfigModel } from '../../models/entity/sms/smsMainApiPathPublicConfigModel';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { SmsMainApiPathPublicConfigAliasJsonModel } from '../../models/entity/sms/smsMainApiPathPublicConfigAliasJsonModel';


@Injectable()
export class SmsMainApiPathPublicConfigService extends ApiCmsServerBase<SmsMainApiPathPublicConfigModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPublicConfig';
  }
  ServiceGetOneWithJsonFormatter(id: number): Observable<ErrorExceptionResult<SmsMainApiPathPublicConfigAliasJsonModel>> {
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
