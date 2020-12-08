import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { WebDesignerMainPageDependencyModel } from '../../models/entity/webDesigner/webDesignerMainPageDependencyModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';



@Injectable()
export class WebDesignerMainPageDependencyService extends ApiCmsServerBase<WebDesignerMainPageDependencyModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerMainPageDependency';
  }
  ServiceAutoAdd(id: string): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AutoAdd/' , {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResultBase) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
}
