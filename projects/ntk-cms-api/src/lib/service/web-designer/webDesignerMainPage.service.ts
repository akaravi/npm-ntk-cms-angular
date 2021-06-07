import { CmsPageUtilityToolsDtoModel } from '../../models/dto/webDesigner/cmsPageUtilityToolsDtoModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { WebDesignerMainPageModel } from '../../models/entity/web-designer/webDesignerMainPageModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { GetAllDefaultPagesBySiteCategoryDtoModel } from '../../models/dto/webDesigner/getAllDefaultPagesBySiteCategoryDtoModel';
import { WebDesignerPageAutoAddDtoModel } from '../../models/dto/webDesigner/webDesignerPageAutoAddDtoModel';


@Injectable()
export class WebDesignerMainPageService extends ApiCmsServerBase<WebDesignerMainPageModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerMainPage';
  }
  ServiceAutoAdd(model: WebDesignerPageAutoAddDtoModel): Observable<ErrorExceptionResultBase> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AutoAdd/',model , {
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
  ServiceWebScreenshot(id: string): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/WebScreenshot/' + id, {
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
  ServiceGetAllDefaultPagesBySiteCategory(model: GetAllDefaultPagesBySiteCategoryDtoModel):
    Observable<ErrorExceptionResult<WebDesignerMainPageModel>> {
    if (model == null) {
      model = new GetAllDefaultPagesBySiteCategoryDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllDefaultPagesBySiteCategory', model, {
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
  ServiceSetDefaultAdminValuePage(id: string): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SetDefaultAdminValuePage/' + id, {
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
  ServiceUtilityTools(model: CmsPageUtilityToolsDtoModel): Observable<ErrorExceptionResult<WebDesignerMainPageModel>> {
    if (model == null) {
      model = new CmsPageUtilityToolsDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/UtilityTools', model, {
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
