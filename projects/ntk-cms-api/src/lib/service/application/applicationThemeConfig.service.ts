import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ApplicationThemeConfigModel } from '../../models/entity/application/applicationThemeConfigModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationThemeConfigService extends ApiCmsServerBase<ApplicationThemeConfigModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ApplicationThemeConfig';
  }

  ServiceCurrentTheme(): Observable<ErrorExceptionResult<ApplicationThemeConfigModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CurrentTheme', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<ApplicationThemeConfigModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
