import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { BlogContentTagModel } from '../../models/entity/blog/blogContentTagModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class BlogContentTagService extends ApiCmsServerBase<BlogContentTagModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'BlogContentTag';
  }


  ServiceAddBatch(model: BlogContentTagModel[]): Observable<ErrorExceptionResult<BlogContentTagModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddBatch', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceDeleteBatch(model: BlogContentTagModel[]): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/DeleteBatch', model, {
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






