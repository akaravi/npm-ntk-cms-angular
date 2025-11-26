import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoEnumModel } from '../../models/entity/base/infoEnumModel';
import { ApiServerBase } from '../base/apiServerBase.service';

@Injectable()
export class WebDesignerEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'WebDesignerEnum';
  }

  ServicePageAbilityTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/PageAbilityTypeEnum',
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
  ServiceCmsSiteMenuAreaTypeEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/CmsSiteMenuAreaTypeEnum',
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
  ServiceCmsPageUtilityToolsDtoModelActionEnum(): Observable<
    ErrorExceptionResult<InfoEnumModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/CmsPageUtilityToolsDtoModelActionEnum',
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
}
