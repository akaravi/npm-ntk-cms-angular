import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CmsPageUtilityToolsDtoModel } from '../../models/dto/webDesigner/cmsPageUtilityToolsDtoModel';
import { GetAllDefaultPagesBySiteCategoryDtoModel } from '../../models/dto/webDesigner/getAllDefaultPagesBySiteCategoryDtoModel';
import { WebDesignerPageAutoAddDtoModel } from '../../models/dto/webDesigner/webDesignerPageAutoAddDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { WebDesignerMainPageModel } from '../../models/entity/web-designer/webDesignerMainPageModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class WebDesignerMainPageService extends ApiCmsServerBase<WebDesignerMainPageModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'WebDesignerMainPage';
  }
  ServiceAutoAdd(model: WebDesignerPageAutoAddDtoModel): Observable<ErrorExceptionResultBase> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AutoAdd/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceWebScreenshot(id: string): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/WebScreenshot/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllDefaultPagesBySiteCategory(model: GetAllDefaultPagesBySiteCategoryDtoModel):
    Observable<ErrorExceptionResult<WebDesignerMainPageModel>> {
    if (model == null) {
      model = new GetAllDefaultPagesBySiteCategoryDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllDefaultPagesBySiteCategory', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceSetDefaultAdminValuePage(id: string): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/SetDefaultAdminValuePage/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/UtilityTools', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
