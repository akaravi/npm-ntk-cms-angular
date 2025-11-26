import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { WebDesignerMainPageDependencyModel } from '../../models/entity/web-designer/webDesignerMainPageDependencyModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class WebDesignerMainPageDependencyService extends ApiCmsServerBase<
  WebDesignerMainPageDependencyModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'WebDesignerMainPageDependency';
  }
  ServiceAutoAdd(): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/AutoAdd/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceWebRoute(id: string): Observable<ErrorExceptionResult<string>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/WebRoute/' + id,
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
