import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ApplicationThemeConfigModel } from '../../models/entity/application/applicationThemeConfigModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ApplicationThemeConfigService extends ApiCmsServerBase<
  ApplicationThemeConfigModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'ApplicationThemeConfig';
  }

  ServiceCurrentTheme(): Observable<
    ErrorExceptionResult<ApplicationThemeConfigModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/CurrentTheme',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
}
