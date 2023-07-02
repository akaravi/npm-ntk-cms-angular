import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { WebDesignerMainPageDependencyModel } from '../../models/entity/web-designer/webDesignerMainPageDependencyModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';



@Injectable()
export class WebDesignerMainPageDependencyService extends ApiCmsServerBase<WebDesignerMainPageDependencyModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'WebDesignerMainPageDependency';
  }
  ServiceAutoAdd(): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/AutoAdd/' , {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceWebRoute(id: string): Observable<ErrorExceptionResult<string>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/WebRoute/' + id, {
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
