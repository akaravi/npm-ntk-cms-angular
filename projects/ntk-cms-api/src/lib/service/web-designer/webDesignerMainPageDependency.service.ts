import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { WebDesignerMainPageDependencyModel } from '../../models/entity/web-designer/webDesignerMainPageDependencyModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';



@Injectable()
export class WebDesignerMainPageDependencyService extends ApiCmsServerBase<WebDesignerMainPageDependencyModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerMainPageDependency';
  }
  ServiceAutoAdd(): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AutoAdd/' , {
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
}
