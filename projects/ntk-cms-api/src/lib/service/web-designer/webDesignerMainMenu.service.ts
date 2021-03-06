import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { WebDesignerMainMenuModel } from '../../models/entity/web-designer/webDesignerMainMenuModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class WebDesignerMainMenuService extends ApiCmsServerBase<WebDesignerMainMenuModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerMainMenu';
  }
  ServiceGetAllTree(model: FilterModel): Observable<ErrorExceptionResult<WebDesignerMainMenuModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.RowPerPage = 200;
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllTree', model, {
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
